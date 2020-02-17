import { NodePath, Visitor } from "@babel/traverse";
import BabelTypes, { MemberExpression } from "@babel/types";
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

const extractMemberPropertyPathName = (
  parentPath: NodePath,
  types: typeof BabelTypes,
  memberPropertyNode: BabelTypes.Node
) => {
  if (types.isStringLiteral(memberPropertyNode)) {
    return types.identifier(memberPropertyNode.value);
  } else if (types.isIdentifier(memberPropertyNode)) {
    const binding = parentPath.scope.getBinding(memberPropertyNode.name) as any;

    if (!binding) {
      throw new Error(
        `[Babel Effects Transform Error] - Failed to construct handler. Could not find a valid definition for handler name`
      );
    }

    return extractMemberPropertyPathName(
      binding.path.parent,
      types,
      binding?.path.node.init
    );
  }

  throw new Error(
    `[Babel Effects Transform Error] - Failed to construct handler. Could not find a valid definition for handler name`
  );
};
/**
 * From within a handle block,
 *
 * Visit each if statement and determine whether or not the test statement conforms to the expected definition for
 * an effects handler.
 */
export const handlerMethodVisitor: Visitor<TypesVisitorPrototype &
  HandlerCreationPrototype> = {
  Identifier(path, { handlerParam }) {
    if (path.node.name === handlerParam.name) {
      path.node.name = `__${path.node.name}__`;
    }
  },
  IfStatement(path, { types, handlerObject, handlerParam }) {
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

    const handlerPropertyName = extractMemberPropertyPathName(
      path,
      types,
      memberPropertyPath.node
    );

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
                    types.newExpression(
                        types.identifier('Promise'),
                        [
                            types.arrowFunctionExpression(
                                [
                                    types.identifier('res'),
                                    types.identifier('rej')
                                ],
                                types.blockStatement([
                                  types.tryStatement(
                                      types.blockStatement([
                                        ...callExpressionDeclarations,
                                        ...consequent.node.body
                                      ]),
                                      types.catchClause(
                                          types.identifier("handlerError"),
                                          types.blockStatement([
                                              types.expressionStatement(
                                                  types.callExpression(
                                                      types.identifier("rej"),
                                                      [
                                                        types.identifier("handlerError")
                                                      ]
                                                  )
                                              )
                                          ])
                                      ),
                                      null
                                  )
                                ]),
                                true
                            )
                        ]
                    )
                )
            ])
          )
        )
      )
    ]);

    const objectMethod = types.objectMethod(
      "method",
      handlerPropertyName ? handlerPropertyName : memberPropertyPath.node,
      [
        types.identifier(`__${this.handlerParam.name}__`),
        types.identifier("resume")
      ],
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
      false
    );

    objectMethod.generator = true;

    handlerObject.properties.push(objectMethod);

    const alternate = path.get("alternate");

    if (alternate) {
      path.traverse(handlerMethodVisitor, {
        types,
        handlerObject,
        handlerParam
      });
    }
    path.remove();
  }
};
