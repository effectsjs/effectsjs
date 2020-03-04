import { NodePath } from "@babel/traverse";
import BabelTypes, {
  BigIntLiteral,
  BooleanLiteral,
  ExpressionStatement,
  Identifier,
  IfStatement,
  MemberExpression,
  NumericLiteral,
  ObjectExpression,
  ObjectPattern,
  StringLiteral,
  SwitchCase
} from "@babel/types";
import {
  collapseObjectPattern,
  renameIdentNameVisitor
} from "./traverse-utilities";
import { recallVisitor } from "./recall-visitor";

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
  } else if (parentPath.get("defaultMatcher").node) {
    return {
      ident: types.identifier("__defaultEffectHandler__"),
      isComputed: true
    };
  }

  throw new Error(
    `[Babel Effects Transform Error] - Failed to construct handler. Could not find a valid definition for handler name`
  );
};

const makeHandlerMethod = (
  memberPropertyPath: NodePath<MemberExpression | Identifier>,
  rootPath: NodePath<IfStatement | SwitchCase | any>,
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
    [types.identifier(`${handlerParamName}`), types.identifier("resume")],
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

// Annoying:
// For now, cannot traverse the HandlerClause node like it was a normal AST node
// without further customization of the babel fork.
export const followHandlerDefinitions = (
  handlerPath: NodePath<any>,
  handlerObject: ObjectExpression,
  types: typeof BabelTypes
) => {
  const handlerBody = handlerPath.get("body");
  const handlerParam = handlerPath.get("param").node as
    | Identifier
    | ObjectPattern;

  const oldIdentName = types.isIdentifier(handlerParam)
    ? handlerParam.name
    : null;
  const newIdentName = types.isIdentifier(handlerParam)
    ? `__${handlerParam.name}__`
    : null;

  const {
    identifier,
    defaultAssignments
  }: {
    identifier: Identifier;
    defaultAssignments: ExpressionStatement[];
  } = types.isObjectPattern(handlerParam)
    ? collapseObjectPattern(handlerParam, types, handlerBody)
    : {
        identifier: types.identifier(newIdentName),
        defaultAssignments: []
      };

  if (oldIdentName) {
    handlerBody.traverse(renameIdentNameVisitor, {
      newName: newIdentName,
      oldName: oldIdentName
    });
  }

  handlerBody.traverse(recallVisitor, { types });

  handlerObject.properties.push(
    makeHandlerMethod(
      handlerPath.get("effectMatcher"),
      handlerPath,
      types,
      handlerPath.get("body"),
      identifier.name,
      defaultAssignments
    )
  );
  const alternatePath = handlerPath.node.alternate
    ? handlerPath.get("alternate.handler")
    : null;
  if (alternatePath)
    followHandlerDefinitions(alternatePath, handlerObject, types);
};
