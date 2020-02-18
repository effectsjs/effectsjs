import { Visitor } from "@babel/traverse";
import { TypesVisitorPrototype } from "./visitor-proto-interfaces";

/**
 * Visit recall statements and convert them to an interpreted stack frame call.
 */
export const recallVisitor: Visitor<TypesVisitorPrototype> = {
  UnaryExpression(path, { types }) {
    // @ts-ignore
    if (path.node.operator === "recall") {
      const stackResumeExpression = types.callExpression(
        types.identifier("stackResume"),
        [types.identifier("handler"), path.node.argument]
      );
      const thenExpression = types.callExpression(
        types.memberExpression(stackResumeExpression, types.identifier("then")),
        [types.identifier("res")]
      );
      const catchExpression = types.callExpression(
        types.memberExpression(thenExpression, types.identifier("catch")),
        [types.identifier("rej")]
      );

      path.replaceWith(catchExpression);

      path
        .findParent(types.isExpressionStatement)
        ?.replaceWith(types.returnStatement(path.node));
    }
  }
};
