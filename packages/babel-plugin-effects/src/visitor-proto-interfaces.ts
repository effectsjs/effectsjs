import BabelTypes from "@babel/types";

export interface TypesVisitorPrototype {
  types: Babel["types"];
  skipChildTraversal?: boolean;
}

export interface Babel {
  types: typeof BabelTypes;
}
