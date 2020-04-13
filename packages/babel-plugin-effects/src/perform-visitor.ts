import { Visitor } from "@babel/traverse";
import { TypesVisitorPrototype } from "./visitor-proto-interfaces";
import { fixupParentGenerator } from "./traverse-utilities";

/**
 * Visit recall statements and convert them to an interpreted stack frame call.
 */
export const performVisitor: Visitor<TypesVisitorPrototype> = {
  UnaryExpression(path, { types }) {
    // TODO [minor] ignore required because types do not recognize the operator as valid. Fix that.
    // @ts-ignore
    if (path.node.operator === "perform") {
      fixupParentGenerator(path, types);
      path.replaceWith(
        types.yieldExpression(
          types.callExpression(types.identifier("performEffect"), [
            path.node.argument,
          ])
        )
      );
    }
  },
};
