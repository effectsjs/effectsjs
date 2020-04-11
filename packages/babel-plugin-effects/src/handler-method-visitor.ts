import { NodePath } from "@babel/traverse";
import BabelTypes, {
  BigIntLiteral,
  BooleanLiteral,
  Identifier,
  IfStatement,
  MemberExpression,
  NumericLiteral,
  ObjectExpression,
  ObjectPattern,
  Statement,
  StringLiteral,
  SwitchCase
} from "@babel/types";

import { recallVisitor } from "./recall-visitor";
import { markPathForRemoval } from "./remove-on-exit-visitor";

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

const createResultContinuation = (
  types: typeof BabelTypes,
  consequentBody: Statement[]
) =>
  types.variableDeclaration("const", [
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
                      types.blockStatement([...consequentBody]),
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

const makeHandlerMethod = (
  memberPropertyPath: NodePath<MemberExpression | Identifier>,
  rootPath: NodePath<IfStatement | SwitchCase | any>,
  types: typeof BabelTypes,
  consequent: any,
  handlerParam: Identifier | ObjectPattern
) => {
  const {
    ident: handlerPropertyName,
    isComputed
  } = extractMemberPropertyPathName(rootPath, types, memberPropertyPath.node);

  // Collect all call expressions located inside of the handler (consequent block)
  const callExpressionDeclarations: Set<Statement> = new Set();
  consequent.traverse({
    CallExpression(expressionPath) {
      const binding = expressionPath.scope.getBinding(
        expressionPath.node.callee.name
      );
      const declaration = binding?.path.find(
        x => types.isVariableDeclaration(x) || types.isFunctionDeclaration(x)
      );

      if (declaration) {
        callExpressionDeclarations.add(declaration.node);

        // Not the most elegant.
        declaration.parent?.parent?.type === "Program" &&
          markPathForRemoval(declaration);
      }
    }
  });

  const resultContinuation = createResultContinuation(types, [
    ...Array.from(callExpressionDeclarations),
    ...consequent.node.body
  ]);

  const objectMethod = types.objectMethod(
    "method",
    handlerPropertyName ? handlerPropertyName : memberPropertyPath.node,
    [handlerParam, types.identifier("resume")],
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

  handlerBody.traverse(recallVisitor, { types });

  handlerObject.properties.push(
    makeHandlerMethod(
      handlerPath.get("effectMatcher"),
      handlerPath,
      types,
      handlerPath.get("body"),
      handlerParam
    )
  );
  const alternatePath = handlerPath.node.alternate
    ? handlerPath.get("alternate.handler")
    : null;
  if (alternatePath)
    followHandlerDefinitions(alternatePath, handlerObject, types);
};
