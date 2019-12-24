import { NodePath } from "@babel/traverse";
import BabelTypes, { ArrowFunctionExpression } from "@babel/types";
import { Babel } from "./index";

export const arrowExpressionToGenerator = (
  types: Babel["types"],
  path: NodePath<ArrowFunctionExpression>
) => {
  // TODO: [major] - More care needs to be taken here:
  //  We can't just convert the arrow function over to a generator. We need to perserve the current "this"
  //  into "self" and pass it in.

  return types.functionExpression(
    undefined,
    path.node.params,
    path.node.body as BabelTypes.BlockStatement,
    true,
    path.node.async
  );
};

// Starting from a child path, find the parent function and convert it to a generator.
export const fixupParentGenerator = (path: NodePath, types: Babel["types"]) => {
  const parentFunctionPath = path.findParent(x => x.isFunction()) as NodePath<
    BabelTypes.Function
  >;

  if (!parentFunctionPath) {
    // TODO: Way more specific error message
    throw new Error(
      "Encountered an expression that must be performed within a generator"
    );
  }

  if (!parentFunctionPath?.node?.generator) {
    if (types.isArrowFunctionExpression(parentFunctionPath.node)) {
      parentFunctionPath.replaceWith(
        arrowExpressionToGenerator(
          types,
          parentFunctionPath as NodePath<ArrowFunctionExpression>
        )
      );
    } else {
      parentFunctionPath.node.generator = true;
    }
  }
};
