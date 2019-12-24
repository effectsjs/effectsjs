import { Visitor, NodePath } from "@babel/traverse";
import BabelTypes, { ObjectExpression, TryStatement } from "@babel/types";
import { parse } from "@babel/parser";
const parser = require("../../babel/packages/babel-parser/lib");
import { handlerMethodVisitor } from "./handler-method-visitor";
import { recallVisitor } from "./recall-visitor";
import { performVisitor } from "./perform-visitor";
import {
  callExpressionVisitor,
  toGeneratorVisitor
} from "./to-generator-visitor";
import { fixupParentGenerator } from "./traverse-utilities";

export interface Plugin {
  visitor: Visitor;
  parserOverride: typeof parse;
}

export interface Babel {
  types: typeof BabelTypes;
}

function createHandler(types: Babel["types"], path: NodePath) {
  const handlerObject = types.objectExpression([]);

  path.traverse(recallVisitor, { types });
  path.traverse(handlerMethodVisitor, { types, handlerObject });

  return handlerObject;
}

// This is performs the final inversion:
// Transform a try-statement path and a handler into a `runProgram` call
// TODO [major] - Capture errors into a continuation,
// TODO [major] - Extend grammar to include a final catch clause, which will receive errors into the continuation.
function createRuntimeRoot(
  types: typeof BabelTypes,
  path: NodePath<TryStatement>,
  handler: ObjectExpression
) {
  const mainFunctionExpression = types.functionExpression(
    null,
    [],
    path.node.block,
    true
  );

  const runTimeRoot = types.callExpression(types.identifier("runProgram"), [
    types.callExpression(types.identifier("withHandler"), [
      handler,
      types.callExpression(mainFunctionExpression, [])
    ])
  ]);

  path.replaceWith(runTimeRoot);
  path.traverse(callExpressionVisitor, { types });
}

function createNestedHandler(
  types: typeof BabelTypes,
  path: NodePath<TryStatement>,
  handler: ObjectExpression
) {
  const mainFunctionExpression = types.functionExpression(
    null,
    [],
    path.node.block,
    true
  );

  const yieldedHandler = types.yieldExpression(
    types.callExpression(types.identifier("withHandler"), [
      handler,
      types.callExpression(mainFunctionExpression, [])
    ])
  );

  path.replaceWith(yieldedHandler);
  path.traverse(callExpressionVisitor, { types });
}

export default function transformEffects({ types }: Babel): Plugin {
  return {
    // Deliver the custom grammar parser to the top-level visitor
    parserOverride(code, opts) {
      return parser.parse(code, opts);
    },
    visitor: {
      TryStatement(path) {
        const parentFunction = path.findParent(types.isFunction);
        const handlerBody = path.get("handler.body") as any;
        const handlerParam = path.get("handler.param") as any;
        const handlerType = path.node.handler?.type;

        // @ts-ignore
        if (handlerType !== "HandleClause" || !handlerBody || !handlerParam)
          return;

        const handler = createHandler(types, handlerBody);

        if (parentFunction === null) {
          createRuntimeRoot(types, path, handler);
        } else {
          createNestedHandler(types, path, handler);
        }
      },
      UnaryExpression(path) {
        // TODO [minor] ignore required because types do not recognize the operator as valid. Fix that.
        // @ts-ignore
        if (path.node.operator === "perform") {
          fixupParentGenerator(path, types);
          path.replaceWith(
            types.yieldExpression(
              types.callExpression(types.identifier("performEffect"), [
                path.node.argument
              ])
            )
          );
        }
        // @ts-ignore
        if (path.node.operator === "recall") {
          path.replaceWith(
            types.callExpression(types.identifier("stackResume"), [
              types.identifier("handler"),
              path.node.argument
            ])
          );
        }
      }
    }
  };
}
