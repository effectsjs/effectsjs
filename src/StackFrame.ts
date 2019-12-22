// Methods for managing the call stack as a linked list
import { Effect, Handler, HandlerDefinition } from "./types/Effects";
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

export type StackFrame = Generator & StackFrameSymbols;

export type FrameLink = StackFrame | Continuation | null;

export const getHandler = (
  frame: StackFrame,
  type: string | number
): HandlerDefinition | null => {
  const handler = frame[HandlerReference];

  if (exists(handler)) {
    return handler[type] ?? null;
  }

  return null;
};

export const getReturnFrame = (frame: any): FrameLink => frame[ReturnFrame];

export const isHandlerType = (
  frame: StackFrame | Continuation | null,
  type: string | number
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
  void (fn[RootContinuation] = true);

export const isRootContinuation = (fn: Continuation | StackFrame) =>
  Boolean(fn[RootContinuation]);

export const findHandlerFrame = (
  frame: StackFrame,
  type: string | number
): StackFrame | null => {
  let frameWithHandler: FrameLink = frame;

  while (exists(frameWithHandler) && !isHandlerType(frameWithHandler, type)) {
    frameWithHandler = getReturnFrame(frameWithHandler);
  }

  if (!exists(frameWithHandler) || !isIterator(frameWithHandler)) return null;

  return frameWithHandler;
};