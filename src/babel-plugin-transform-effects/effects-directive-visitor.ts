import { TypesVisitorPrototype } from "./visitor-proto-interfaces";
import { Visitor, NodePath } from "@babel/traverse";
import BabelTypes, {BlockStatement} from "@babel/types";
import {yieldCallExpressionVisitor} from "./to-generator-visitor";

function createRuntimeRoot(
  types: typeof BabelTypes,
  continuation: BabelTypes.Statement[]
) {

  const mainFunctionExpression = types.functionExpression(
    null,
    [],
    types.blockStatement(continuation),
    true
  );

  return types.callExpression(types.identifier("runProgram"), [
    types.callExpression(mainFunctionExpression, [])
  ]);
}

export const effectsDirectiveVisitor: Visitor<TypesVisitorPrototype> = {
  ExpressionStatement(path, { types }) {
    const expression = path.get("expression")?.node;
    if (
      types.isStringLiteral(expression) &&
      expression.value === "use effects"
    ) {
      if (!Array.isArray(path.container)) {
        throw new Error(
          `[ Transform Effects Plugin Error ] - Encountered an unexpected state in the AST: 'Use Effects' directive found, but no continuation can be derived`
        );
      }

      const continuationStartKey = Number(path.key) + 1;

      const continuation = path.container.slice(
        continuationStartKey
      ) as BabelTypes.Statement[];

      // Hacky :(
        for(let i = continuationStartKey; i < path.container.length; i += 1){
            path.getSibling(i)?.remove();
        }

      path.replaceWith(createRuntimeRoot(types, continuation));
    }
  },
  Directive(path, {types}){
    const value = (path.get('value.value') as NodePath).node as unknown as string;
    if(value !== 'use effects') return;

    const blockParent = path.findParent(types.isBlockStatement) as NodePath<BlockStatement>;

    if(!blockParent  || !types.isBlockStatement(blockParent)){
      throw new Error(
          `[ Transform Effects Plugin Error ] - Encountered an unexpected state in the AST: 'Use Effects' directive found, but no continuation can be derived`
      );
    }

    blockParent.node.body = [
        types.expressionStatement(createRuntimeRoot(types, blockParent.node.body))
    ];

    blockParent.traverse({
      Identifier(idPath){
        if(idPath.node.name === 'runProgram'){
          (idPath.findParent(types.isCallExpression)?.get('arguments') as any)?.forEach(n => n.traverse(yieldCallExpressionVisitor, {types}));
        }
      }
    });


    path.remove();
  }
};
