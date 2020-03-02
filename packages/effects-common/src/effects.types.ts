import { Continuation } from "./StackFrame";

export type HandlerDefinition = (
  data: any,
  resume: Continuation
) => Generator<any, any, any>;

export interface Handler {
  [key: string]: HandlerDefinition;
  [index: number]: HandlerDefinition;
}

export type EffectType = string | number | symbol | undefined;

export interface Effect {
  type: EffectType;
  data?: any;
}
