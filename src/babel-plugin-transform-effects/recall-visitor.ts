import { Visitor } from "@babel/traverse";
import { TypesVisitorPrototype } from "./visitor-proto-interfaces";

/**
 * Visit recall statements and convert them to an interpreted stack frame call.
 */
export const recallVisitor: Visitor<TypesVisitorPrototype> = {
  UnaryExpression(path, { types }) {
    // @ts-ignore
    if (path.node.operator === "recall") {
      path.replaceWith(
        types.callExpression(types.identifier("stackResume"), [
          types.identifier("handler"),
          path.node.argument
        ])
      );

      path.findParent(types.isExpressionStatement)?.replaceWith(
          types.returnStatement(
              path.node
          )
      )
    }
  }
};
