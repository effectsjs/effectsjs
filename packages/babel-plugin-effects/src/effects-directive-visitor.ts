import {
  EffectsDirectiveVisitorPrototype,
  TypesVisitorPrototype
} from "./visitor-proto-interfaces";
import { Visitor, NodePath } from "@babel/traverse";
import BabelTypes, { BlockStatement } from "@babel/types";
import {
  toYieldExpression,
  yieldCallExpressionVisitor
} from "./to-generator-visitor";

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

const runProgramYieldCallExpressionVisitor: Visitor<EffectsDirectiveVisitorPrototype> = {
  Identifier(idPath, { types }) {
    if (idPath.node.name === "runProgram") {
      (idPath
        .findParent(types.isCallExpression)
        ?.get("arguments") as any)?.forEach(n => {
        n.traverse(yieldCallExpressionVisitor, {
          types,
          skipChildTraversal: true
        });
      });
    }
  },
  CallExpression(path, { types, callExpressionCandidates }) {
    if (callExpressionCandidates.has(path)) {
      const calleeName = path.get("callee.name").node;

      toYieldExpression(path, types);

      if (calleeName) {
        const bindingScope = path.findParent(x => x.scope.bindings[calleeName]);
        if (!bindingScope) return;
        const bindingPath = bindingScope.scope.bindings[calleeName]?.path;
        bindingPath?.traverse(runProgramYieldCallExpressionVisitor, {
          types,
          callExpressionCandidates
        });
      }
    }
  }
};

export const effectsDirectiveVisitor: Visitor<EffectsDirectiveVisitorPrototype> = {
  ExpressionStatement(path, { types, callExpressionCandidates }) {
    const expression = path.get("expression")?.node;
    const parentFunction = (path.findParent(
      types.isFunction
    ) as unknown) as NodePath<BabelTypes.Function>;

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
      for (let i = continuationStartKey; i < path.container.length; i += 1) {
        path.getSibling(i)?.remove();
      }

      const runtimeExpression = parentFunction?.node.async
        ? types.awaitExpression(createRuntimeRoot(types, continuation))
        : createRuntimeRoot(types, continuation);

      path.replaceWith(runtimeExpression);
      path.traverse(runProgramYieldCallExpressionVisitor, {
        types,
        callExpressionCandidates
      });
    }
  },
  Directive(path, { types, callExpressionCandidates }) {
    const value = ((path.get("value.value") as NodePath)
      .node as unknown) as string;
    if (value !== "use effects") return;

    const blockParent = path.findParent(types.isBlockStatement) as NodePath<
      BlockStatement
    >;

    if (!blockParent || !types.isBlockStatement(blockParent)) {
      throw new Error(
        `[ Transform Effects Plugin Error ] - Encountered an unexpected state in the AST: 'Use Effects' directive found, but no continuation can be derived`
      );
    }

    blockParent.node.body = [
      types.returnStatement(createRuntimeRoot(types, blockParent.node.body))
    ];

    blockParent.traverse(runProgramYieldCallExpressionVisitor, {
      types,
      callExpressionCandidates
    });

    path.remove();
  }
};
