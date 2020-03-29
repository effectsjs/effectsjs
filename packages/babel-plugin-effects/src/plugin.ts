import { parse } from "@babel/parser";
import { NodePath, Visitor } from "@babel/traverse";
import BabelTypes, { ObjectExpression, TryStatement } from "@babel/types";
import { effectsDirectiveVisitor } from "./effects-directive-visitor";
import { followHandlerDefinitions } from "./handler-method-visitor";
import { fixupParentGenerator } from "./traverse-utilities";
import { REMOVAL_FIELD } from "./remove-on-exit-visitor";
import { yieldProgramExpressionVisitor } from "./yield-program-expression-visitor";

export const parser = require("../../../babel/packages/babel-parser/lib");

export interface Plugin {
  visitor: Visitor;
  // yeah, I dont like it either
  pre?: (this: any, state?: any) => void;
  post?: (this: any, state?: any) => void;
  parserOverride: typeof parse;
}

export interface Babel {
  types: typeof BabelTypes;
}

function createHandler(types: Babel["types"], path: NodePath) {
  const handlerObject = types.objectExpression([]);

  followHandlerDefinitions(path, handlerObject, types);

  return handlerObject;
}

// This is performs the final inversion:
// Transform a try-statement path and a handler into a `runProgram` call
// TODO [major] - Capture errors into a continuation,
// TODO [major] - Extend grammar to include a final catch clause, which will receive errors into the continuation.
const createWithHandlerInvocation = (
  types: typeof BabelTypes,
  path: NodePath<TryStatement>,
  handler: ObjectExpression
) => {
  const mainFunctionExpression = types.functionExpression(
    null,
    [],
    path.node.block,
    true,
    true
  );

  return types.callExpression(types.identifier("withHandler"), [
    handler,
    types.callExpression(mainFunctionExpression, []),
  ]);
};

export function transformEffects({ types }: Babel): Plugin {
  return {
    // Deliver the custom grammar parser to the top-level visitor
    parserOverride(code, opts) {
      return parser.parse(code, opts);
    },
    pre() {
      this.removalNodes = new Set<NodePath>();
    },
    post() {
      Array.from(this.removalNodes).forEach((x: NodePath) => x.remove());
    },
    visitor: {
      Program: {
        exit(path, state) {
          path.traverse(effectsDirectiveVisitor, {
            types,
          });
          path.traverse(
            {
              YieldExpression(path) {
                fixupParentGenerator(path, types);
              },
            },
            { types }
          );
          path.traverse(
            {
              Declaration: (path) => {
                if (path[REMOVAL_FIELD] === true) {
                  state.removalNodes.add(path);
                }
              },
            },
            { types }
          );
        },
      },
      TryStatement: {
        enter(path) {
          const handlerBody = path.get("handler.body") as any;
          const handlerType = path.node.handler?.type;

          // @ts-ignore
          if (handlerType !== "HandleClause" || !handlerBody) return;

          path.get("block").traverse(yieldProgramExpressionVisitor, { types });

          const handler = createHandler(types, path.get("handler"));
          const withHandlerExpression = createWithHandlerInvocation(
            types,
            path,
            handler
          );

          fixupParentGenerator(path, types);
          const parent = path.findParent(types.isFunction) as NodePath<
            BabelTypes.Function
          >;

          if (parent?.node?.generator) {
            path.replaceWith(
              types.returnStatement(
                types.yieldExpression(withHandlerExpression)
              )
            );
          } else {
            path.replaceWith(withHandlerExpression);
          }
        },
      },
      UnaryExpression(path) {
        // TODO [minor] ignore required because types do not recognize the operator as valid. Fix that.
        // @ts-ignore
        if (path.node.operator === "perform") {
          path.replaceWith(
            types.yieldExpression(
              types.callExpression(types.identifier("performEffect"), [
                path.node.argument,
              ])
            )
          );
          fixupParentGenerator(path, types);
        }
        // @ts-ignore
        if (path.node.operator === "recall") {
          const stackResumeExpression = types.callExpression(
            types.identifier("stackResume"),
            [types.identifier("handler"), path.node.argument]
          );
          const thenExpression = types.callExpression(
            types.memberExpression(
              stackResumeExpression,
              types.identifier("then")
            ),
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
      },
    },
  };
}