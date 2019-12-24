import BabelTypes, {Identifier, ObjectExpression} from "@babel/types";

export interface TypesVisitorPrototype {
  types: Babel["types"];
}

export interface HandlerCreationPrototype {
  handlerObject: ObjectExpression;
  handlerParam : Identifier
}

export interface Babel {
  types: typeof BabelTypes;
}
