import { TypesVisitorPrototype } from "./visitor-proto-interfaces";
import { NodePath, Visitor } from "@babel/traverse";
import { isYieldCandidate, toYieldExpression } from "./to-generator-visitor";
import { findDeclaration } from "./traverse-utilities";

export const yieldProgramExpressionVisitor: Visitor<TypesVisitorPrototype> = {
  CallExpression(path, { types }) {
    if (isYieldCandidate(path, types)) {
      const callee = path.get("callee");

      toYieldExpression(path, types);
      findDeclaration(callee)?.traverse(yieldProgramExpressionVisitor, {
        types
      });
    }
  }
};
