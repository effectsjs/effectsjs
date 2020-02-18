import {
  addHandler,
  addReturn,
  findHandlerFrame,
  FrameLink,
  getHandler,
  getReturnFrame,
  isRootContinuation,
  StackFrame
} from "./StackFrame";
import { exists, isContinuation, isIterator } from "./util";
import { Effect, Handler } from "./effects.types";

import * as _frame from "./StackFrame";
import * as _util from "./util";

export const frame = _frame;
export const util = _util;
export * from "./effects.types";

export class UnhandledEffectError extends TypeError {
  constructor({ type }: Effect) {
    super();

    this.message = `Encountered an unhandled effect :${type}`;
  }
}

const unwindStack = (e: Error | any, frame: StackFrame) => {
  // TODO: [major] construct an intelligible stack trace.
  //  This might be done best with the help of a babel transform plugin
  let root: FrameLink = frame;

  while (exists(root) && !isRootContinuation(root)) {
    root = getReturnFrame(root);
  }

  if (isContinuation(root)) root(e);
  else throw e;
};

export const stackResume = async (
  gen: Generator | StackFrame | any,
  arg?: any
): Promise<any> => {
  if (!isIterator(gen)) {
    return gen;
  }

  try {
    const { value, done } = await gen.next(arg);

    if (!done) {
      if (isIterator(value)) {
        addReturn(value, gen);
        return await stackResume(value, null);
      } else if (isContinuation(value)) {
        return await value(gen);
      } else {
        return await stackResume(gen, value);
      }
    } else {
      const returnFrame = getReturnFrame(gen);

      if (isIterator(returnFrame)) {
        return await stackResume(returnFrame, value);
      } else if (isContinuation(returnFrame)) {
        return await returnFrame(value);
      } else {
        return arg;
      }
    }
  } catch (e) {
    unwindStack(e, gen);
  }
};

export const runProgram = async (root: Generator) => {
  const result = await stackResume(root, null);
  return result;
};

export const performEffect = ({ type, ...data }: Effect) => async (
  currentFrame: Generator
) => {
  const frameWithEffectHandler = findHandlerFrame(currentFrame, type);

  if (!exists(frameWithEffectHandler)) {
    throw new UnhandledEffectError({ type });
  }

  // This is a GeneratorFunction, it will create the handler frame
  const handlerFrameCreator = getHandler(frameWithEffectHandler, type);

  // TODO: [minor] Set up a type-guard on getHandler, or findHandlerFrame to indicate that at this point the handlerFrame must exist.
  if (!exists(handlerFrameCreator)) {
    // Unreachable code
    throw new TypeError(`Reached Something That shouldn't be reachable`);
  }

  /**
   *  `capturedContinuation` is passed to a {@link: src/types/Effects.d.ts} HandlerDefinition as the `resume` parameter.
   *  The result of this function can be yielded as a value back to the stack interpreter.
   *
   *  At the point it is yielded to the stack interpreter, the current frame being evaluated will be
   *  the handler frame that yielded the continuation (the current control frame).
   */
  const capturedContinuation = (handlerFnResult: any) =>
    /**
     * The interpreter will call this with whatever frame is currently in control.
     * It's possible to do something with that frame.. but I don't think it's necessary,
     * just resume the frame that performed with the result of the perform.
     */
    async (currentControlFrame: StackFrame) => {
      return await stackResume(currentFrame, handlerFnResult);
    };

  const handlerFrame = handlerFrameCreator(data, capturedContinuation);

  addReturn(handlerFrame, getReturnFrame(frameWithEffectHandler));

  return await stackResume(handlerFrame);
};

export const withHandler = (handler: Handler, frame: StackFrame) => {
  const handlerFrame = (function*() {
    return yield frame;
  })();

  addHandler(handlerFrame, handler);

  return handlerFrame;
};
