import { NodePath, Visitor } from "@babel/traverse";
import BabelTypes, {
  AssignmentExpression,
  BigIntLiteral,
  BooleanLiteral,
  ExpressionStatement,
  Identifier,
  IfStatement,
  MemberExpression,
  NumericLiteral,
  ObjectExpression,
  StringLiteral,
  SwitchCase
} from "@babel/types";
import {
  TypesVisitorPrototype,
  HandlerCreationPrototype
} from "./visitor-proto-interfaces";

const isCorrectMemberPropertyPath = (
  types: typeof BabelTypes,
  memberPropertyNode: BabelTypes.Node
) => {
  return (
    types.isIdentifier(memberPropertyNode) ||
    types.isStringLiteral(memberPropertyNode)
  );
};

const isLiteralProp = (
  node: NodePath,
  types: typeof BabelTypes
): node is BigIntLiteral | BooleanLiteral | StringLiteral | NumericLiteral =>
  types.isLiteral(node) &&
  !types.isNullLiteral(node) &&
  !types.isRegExpLiteral(node) &&
  !types.isTemplateLiteral(node);

const extractMemberPropertyPathName = (
  parentPath: NodePath,
  types: typeof BabelTypes,
  memberPropertyNode: BabelTypes.Node
): { ident: Identifier; isComputed: boolean } => {
  if (isLiteralProp(memberPropertyNode, types)) {
    return {
      ident: types.identifier(memberPropertyNode.value),
      isComputed: false
    };
  } else if (types.isIdentifier(memberPropertyNode)) {
    const binding = parentPath.scope.getBinding(memberPropertyNode.name) as any;

    if (binding && types.isIdentifier(memberPropertyNode)) {
      return { ident: memberPropertyNode, isComputed: true };
    }

    // I think at this point it's safe to throw.
  }

  throw new Error(
    `[Babel Effects Transform Error] - Failed to construct handler. Could not find a valid definition for handler name`
  );
};

const makeHandlerMethod = (
  memberPropertyPath: NodePath<MemberExpression | Identifier>,
  rootPath: NodePath<IfStatement | SwitchCase>,
  types: typeof BabelTypes,
  consequent: any,
  handlerParamName: string,
  defaultAssignments: ExpressionStatement[]
) => {
  const {
    ident: handlerPropertyName,
    isComputed
  } = extractMemberPropertyPathName(rootPath, types, memberPropertyPath.node);

  // Collect all call expressions located inside of the handler (consequent block)
  const callExpressionDeclarations: Node[] = [];
  consequent.traverse({
    CallExpression(expressionPath) {
      const binding = expressionPath.scope.getBinding(
        expressionPath.node.callee.name
      );
      const declaration = binding?.path.find(
        x => types.isVariableDeclaration(x) || types.isFunctionDeclaration(x)
      );
      if (declaration) {
        callExpressionDeclarations.push(declaration.node);
        declaration.remove();
      }
    }
  });

  const consequentBody = types.isBlockStatement(consequent.node)
    ? consequent.node.body
    : types.blockStatement([consequent.node]).body;

  // GEE WHIZ!
  const resultContinuation = types.variableDeclaration("const", [
    types.variableDeclarator(
      types.identifier("result"),
      types.yieldExpression(
        types.functionExpression(
          null,
          [types.identifier("handler")],
          types.blockStatement([
            types.returnStatement(
              types.newExpression(types.identifier("Promise"), [
                types.arrowFunctionExpression(
                  [types.identifier("res"), types.identifier("rej")],
                  types.blockStatement([
                    types.tryStatement(
                      types.blockStatement([
                        ...callExpressionDeclarations,
                        ...defaultAssignments,
                        ...consequentBody
                      ]),
                      types.catchClause(
                        types.identifier("handlerError"),
                        types.blockStatement([
                          types.expressionStatement(
                            types.callExpression(types.identifier("rej"), [
                              types.identifier("handlerError")
                            ])
                          )
                        ])
                      ),
                      null
                    )
                  ]),
                  true
                )
              ])
            )
          ])
        )
      )
    )
  ]);

  const objectMethod = types.objectMethod(
    "method",
    handlerPropertyName ? handlerPropertyName : memberPropertyPath.node,
    [types.identifier(`__${handlerParamName}__`), types.identifier("resume")],
    types.blockStatement([
      resultContinuation,
      types.returnStatement(
        types.yieldExpression(
          types.callExpression(types.identifier("resume"), [
            types.identifier("result")
          ])
        )
      )
    ]),
    isComputed
  );

  objectMethod.generator = true;

  return objectMethod;
};

/**
 * From within a handle block,
 *
 * Visit each if statement and determine whether or not the test statement conforms to the expected definition for
 * an effects handler.
 */
export const handlerMethodVisitor: Visitor<TypesVisitorPrototype &
  HandlerCreationPrototype> = {
  Identifier(path, { handlerParamName }) {
    if (path.node.name === handlerParamName) {
      path.node.name = `__${path.node.name}__`;
    }
  },
  IfStatement(
    path,
    { types, handlerObject, handlerParamName, defaultAssignments }
  ) {
    const testPath = path.get("test");
    const consequent = path.get("consequent") as any;
    const memberPropertyPath = path.get("test.right") as NodePath<
      MemberExpression
    >;

    if (!types.isBinaryExpression(testPath.node)) return;
    if (!["==", "==="].includes(testPath.node.operator)) return;
    if (!types.isMemberExpression(testPath.node.left)) return;
    if (!memberPropertyPath) return;
    if (!isCorrectMemberPropertyPath(types, memberPropertyPath.node)) return;

    handlerObject.properties.push(
      makeHandlerMethod(
        memberPropertyPath,
        path,
        types,
        consequent,
        handlerParamName,
        defaultAssignments
      )
    );

    const alternate = path.get("alternate");

    if (alternate) {
      path.traverse(handlerMethodVisitor, {
        types,
        handlerObject,
        handlerParamName,
        defaultAssignments
      });
    }

    path.remove();
  },
  SwitchCase(
    path,
    { types, handlerObject, handlerParamName, defaultAssignments }
  ) {
    const memberPropertyPath = path.get("test") as NodePath<Identifier>;
    const consequent = path.get("consequent") as any;

    consequent.forEach(x => x.traverse(handlerMethodVisitor, { ...this }));

    if (!memberPropertyPath) return;

    handlerObject.properties.push(
      makeHandlerMethod(
        memberPropertyPath,
        path,
        types,
        consequent[0],
        handlerParamName,
        defaultAssignments
      )
    );

    path.remove();
  }
};
