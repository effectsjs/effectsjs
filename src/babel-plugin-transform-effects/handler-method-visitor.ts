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
/**
 * From within a handle block,
 *
 * Visit each if statement and determine whether or not the test statement conforms to the expected definition for
 * an effects handler.
 */
export const handlerMethodVisitor: Visitor<TypesVisitorPrototype &
  HandlerCreationPrototype> = {
  IfStatement(path, { types, handlerObject }) {
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

    const resultContinuation = types.variableDeclaration("const", [
      types.variableDeclarator(
        types.identifier("result"),
        types.yieldExpression(
          types.functionExpression(
            null,
            [types.identifier("handler")],
            types.blockStatement([
              ...callExpressionDeclarations,
              ...consequent.node.body
            ])
          )
        )
      )
    ]);

    const objectMethod = types.objectMethod(
      "method",
      memberPropertyPath.node,
      [types.identifier("data"), types.identifier("resume")],
      types.blockStatement([
        resultContinuation,
        types.returnStatement(types.yieldExpression(types.identifier("result")))
      ]),
      false
    );

    objectMethod.generator = true;

    handlerObject.properties.push(objectMethod);
    const alternate = path.get("alternate");
    if (alternate) {
      path.traverse(handlerMethodVisitor, { types, handlerObject });
    }
    path.remove();
  }
};
