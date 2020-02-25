import { Continuation } from "./StackFrame";

export type HandlerDefinition = (
  data: any,
  resume: Continuation
) => Generator<any, any, any>;

export interface Handler {
  [key: string]: HandlerDefinition;
  [index: number]: HandlerDefinition;
}

export type HandlerType = string | number | symbol;

export interface Effect {
  type: HandlerType;
  data?: any;
}
