import BabelTypes, { ObjectExpression } from "@babel/types";

export interface TypesVisitorPrototype {
  types: Babel["types"];
}

export interface HandlerCreationPrototype {
  handlerObject: ObjectExpression;
}

export interface Babel {
  types: typeof BabelTypes;
}
