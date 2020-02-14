import { TypesVisitorPrototype } from "./visitor-proto-interfaces";
import { Visitor, NodePath } from "@babel/traverse";
import BabelTypes, {
  ArrowFunctionExpression,
} from "@babel/types";
import {arrowExpressionToGenerator, fixupParentGenerator} from "./traverse-utilities";
import { performVisitor } from "./perform-visitor";
import {exists} from "../util";

export const toGeneratorVisitor: Visitor<TypesVisitorPrototype> = {
  Function(path, { types }) {
    if (path.node.async) return;

    if (types.isArrowFunctionExpression(path.node)) {
      path.replaceWith(
        arrowExpressionToGenerator(
          types,
          path as NodePath<ArrowFunctionExpression>
        )
      );
    } else if (!path.node.generator) {
      path.node.generator = true;
    }

    const body = path.get("body");

    body?.traverse(yieldCallExpressionVisitor, { types });
    body?.traverse(callExpressionVisitor, { types });
    body?.traverse(performVisitor, { types });
  }
};

export const callExpressionVisitor: Visitor<TypesVisitorPrototype> = {
  CallExpression(path, { types }) {
    const parentFunction = path.findParent(types.isFunction) as NodePath<
      BabelTypes.Function
    >;
    const immediateParent = path.parent;
    if (
      parentFunction?.node.generator &&
      (types.isExpressionStatement(immediateParent) ||
        types.isVariableDeclarator(immediateParent))
    ) {
      const callee = (path.get("callee.name") as any).node;
      const binding = path.scope.getBinding(callee);

      if (binding && types.isFunctionDeclaration(binding.path.node)) {
        binding.path.node.generator = true;
      } else {
        binding?.path.traverse(toGeneratorVisitor, { types });
      }

      if (!types.isYieldExpression(path.node)) {
        path.replaceWith(types.yieldExpression(path.node));
      }
    }
  }
};

export const yieldCallExpressionVisitor : Visitor<TypesVisitorPrototype> = {
  CallExpression(path, {types, skipChildTraversal}) {
    const immediateParent = path.parent;
    if (types.isYieldExpression(immediateParent)) return;

    path.replaceWith(
        types.yieldExpression(path.node)
    );

    // Safety First

    fixupParentGenerator(path, types);

    if(exists(skipChildTraversal) && Boolean(skipChildTraversal)){
      path.skip();
    }
  }
};
