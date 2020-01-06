import { parse } from "@babel/parser";
import { NodePath, Visitor } from "@babel/traverse";
import BabelTypes, { Identifier, ObjectExpression, TryStatement } from "@babel/types";
import { effectsDirectiveVisitor } from "./effects-directive-visitor";
import { handlerMethodVisitor } from "./handler-method-visitor";
import { recallVisitor } from "./recall-visitor";
import { fixupParentGenerator } from "./traverse-utilities";
const parser = require("../../babel/packages/babel-parser/lib");

export interface Plugin {
  visitor: Visitor;
  pre?: (state?: any) => void;
  post?: (state?: any) => void;
  parserOverride: typeof parse;
}

export interface Babel {
  types: typeof BabelTypes;
}

function createHandler(
  types: Babel["types"],
  path: NodePath,
  handlerParam: Identifier
) {
  const handlerObject = types.objectExpression([]);

  path.traverse(recallVisitor, { types });
  path.traverse(handlerMethodVisitor, { types, handlerObject, handlerParam });

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
    true
  );

  return types.callExpression(types.identifier("withHandler"), [
    handler,
    types.callExpression(mainFunctionExpression, [])
  ]);
};

export default function transformEffects({ types }: Babel): Plugin {
  return {
    // Deliver the custom grammar parser to the top-level visitor
    parserOverride(code, opts) {
      return parser.parse(code, opts);
    },
    visitor: {
      Program: {
        exit(path) {
          path.traverse(effectsDirectiveVisitor, { types });
        }
      },
      TryStatement: {
        enter(path) {
          const handlerBody = path.get("handler.body") as any;
          const handlerParam = path.get("handler.param") as any;
          const handlerType = path.node.handler?.type;

          // @ts-ignore
          if (handlerType !== "HandleClause" || !handlerBody || !handlerParam)
            return;

          const handler = createHandler(types, handlerBody, handlerParam.node);
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
            path.replaceWith(types.returnStatement(types.yieldExpression(withHandlerExpression)));
          } else {
            path.replaceWith(withHandlerExpression);
          }
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
