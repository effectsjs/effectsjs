import { NodePath } from "@babel/traverse";
import BabelTypes, {
  ArrowFunctionExpression, BlockStatement,
  CallExpression,
  VariableDeclarator
} from "@babel/types";
import { Babel } from "./index";
import {yieldCallExpressionVisitor} from "./to-generator-visitor";

export const hasEffectsDirective = (path : NodePath<BabelTypes.Function>) => {
  return (path.get('body.directives') as NodePath[])?.map(directive => {
    return (directive.get('value.value') as NodePath)?.node as unknown as string
  }).includes('use effects');
};

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
// Because we cannot predict what the value of call expressions will be, we must yield them to the stack interpreter.
export const fixupParentGenerator = (path: NodePath, types: Babel["types"]) => {
  const parentFunctionPath = path.findParent(x => x.isFunction()) as NodePath<
    BabelTypes.Function
  >;

  if (!parentFunctionPath) {
    // TODO: Think about what needs to be done here... Can we safely just return?
    return;
  }

  if(hasEffectsDirective(parentFunctionPath)) return;

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

    parentFunctionPath.get('body')?.traverse(yieldCallExpressionVisitor, {types});
    const name = types.isFunctionDeclaration(parentFunctionPath.node)
      ? parentFunctionPath.node.id?.name
      : (parentFunctionPath.parentPath.node as any)?.id?.name;

    if (name) {
      const bindingScope = parentFunctionPath.findParent(x =>
        x.scope.hasBinding(name)
      );

      bindingScope.scope.getBinding(name)?.referencePaths.forEach(reference => {
        const expStatementParent = reference.findParent(
          types.isExpressionStatement
        );

        if(!expStatementParent) return;

        const isYield = types.isYieldExpression(
          expStatementParent.get("expression")
        );

        if (!isYield) {
          const callExpression = reference.findParent(
            types.isCallExpression
          ) as NodePath<CallExpression>;

          callExpression?.replaceWith(
            types.yieldExpression(callExpression.node)
          );

          fixupParentGenerator(reference, types);
        }
      });
    }
  }
};
