import BabelTypes, {
  ExpressionStatement,
  ObjectExpression
} from "@babel/types";

export interface TypesVisitorPrototype {
  types: Babel["types"];
  skipChildTraversal?: boolean;
}

export interface EffectsDirectiveVisitorPrototype {
  types: Babel["types"];
  callExpressionCandidates: Set<Node>;
}

export interface Babel {
  types: typeof BabelTypes;
}
