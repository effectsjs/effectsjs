import BabelTypes, {
  AssignmentExpression,
  ExpressionStatement,
  Identifier,
  ObjectExpression
} from "@babel/types";

export interface TypesVisitorPrototype {
  types: Babel["types"];
  skipChildTraversal?: boolean;
}

export interface HandlerCreationPrototype {
  handlerObject: ObjectExpression;
  handlerParamName: string;
  defaultAssignments: ExpressionStatement[];
}

export interface Babel {
  types: typeof BabelTypes;
}
