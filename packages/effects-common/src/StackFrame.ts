// Methods for managing the call stack as a linked list
import { Handler, HandlerDefinition, EffectType } from "./effects.types";
import { exists, isIterator } from "./util";

const ReturnFrame: unique symbol = Symbol("ReturnFrame");
const HandlerReference: unique symbol = Symbol("HandlerReference");
const RootContinuation: unique symbol = Symbol("RootContinuation");

export interface StackFrameSymbols {
  [ReturnFrame]?: StackFrame | Continuation | null;
  [HandlerReference]?: Handler;
  [RootContinuation]?: boolean;
}

export type Continuation = (...args: any[]) => any;

export type StackFrame = (Generator | AsyncGenerator) & StackFrameSymbols;

export type FrameLink = StackFrame | Continuation | null;

export const getHandler = (
  frame: StackFrame,
  type: EffectType,
  defaultType: EffectType | null = null
): HandlerDefinition | null => {
  const handler = frame[HandlerReference];

  if (exists(handler)) {
    // @ts-ignore
    return exists(handler[type]) ? handler[type] : handler[defaultType] ?? null;
  }

  return null;
};

export const getReturnFrame = (frame: any): FrameLink => frame[ReturnFrame];

export const isHandlerType = (
  frame: StackFrame | Continuation | null,
  type: EffectType
): frame is StackFrame => {
  if (!isIterator(frame)) return false;
  return getHandler(frame, type) !== null;
};

export const addReturn = (
  targetFrame: StackFrame,
  returnFrame: StackFrame | Continuation | null
): void => void (targetFrame[ReturnFrame] = returnFrame);

export const addHandler = (frame: StackFrame, handler: Handler): void =>
  void (frame[HandlerReference] = handler);

export const setRootContinuation = (fn: Continuation) =>
  void ((fn as any)[RootContinuation] = true);

export const isRootContinuation = (fn: Continuation | StackFrame) =>
  Boolean((fn as any)[RootContinuation]);

export const findHandlerFrame = (
  frame: StackFrame,
  type: EffectType,
  defaultType: EffectType | null = null
): StackFrame | null => {
  let frameWithHandler: FrameLink = frame;

  while (exists(frameWithHandler) && !isHandlerType(frameWithHandler, type)) {
    if (exists(defaultType) && isHandlerType(frameWithHandler, defaultType))
      break;
    frameWithHandler = getReturnFrame(frameWithHandler);
  }

  if (!exists(frameWithHandler) || !isIterator(frameWithHandler)) return null;

  return frameWithHandler;
};
