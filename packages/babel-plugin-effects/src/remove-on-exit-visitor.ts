import { Visitor } from "@babel/traverse";
import { TypesVisitorPrototype } from "./visitor-proto-interfaces";
import { Expression } from "@babel/types";

const REMOVAL_FIELD = Symbol();
/**
 * Visit recall statements and convert them to an interpreted stack frame call.
 */
export const removeOnExitVisitor: Visitor<TypesVisitorPrototype> = {
  Declaration(path, { types }) {
    if (path[REMOVAL_FIELD] === true) {
      path.remove();
    }
  },
};

export const markPathForRemoval = (path: Expression) =>
  (path[REMOVAL_FIELD] = true);
