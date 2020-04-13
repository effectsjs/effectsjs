import { Expression } from "@babel/types";

export const REMOVAL_FIELD = Symbol();

export const markPathForRemoval = (path: Expression) =>
  (path[REMOVAL_FIELD] = true);
