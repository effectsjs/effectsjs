import {
  addHandler,
  addReturn,
  Continuation,
  findHandlerFrame,
  FrameLink,
  getHandler,
  getReturnFrame,
  isRootContinuation,
  setRootContinuation,
  StackFrame,
} from "./StackFrame";
import { exists, isContinuation, isIterator } from "./util";
import { Effect, Handler } from "./types/Effects";

export class InvalidStackFrameError extends Error {
  message = `Received a non-iterator-like input at top-level resume call. This is likely a plumbing issue. And if you\'re encountering this, the babel-plugin-effects-transform is likely acting up.`;
}

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

export const stackResume = (gen: Generator | StackFrame, arg?: any) => {
  if (!isIterator(gen)) {
    // throw new InvalidStackFrameError();
    return gen;
  }

  try {
    const { value, done } = gen.next(arg);

    if (!done) {
      if (isIterator(value)) {
        addReturn(value, gen);
        stackResume(value, null);
      } else if (isContinuation(value)) {
        value(gen);
      } else {
        stackResume(gen, value);
      }
    } else {
      const returnFrame = getReturnFrame(gen);

      if (isIterator(returnFrame)) {
        stackResume(returnFrame, value);
      } else if (isContinuation(returnFrame)) {
        returnFrame(value);
      }
    }
  } catch (e) {
    unwindStack(e, gen);
  }
};

export const runProgram = (root: Generator, continuation?: Continuation) => {
  if (exists(continuation)) {
    setRootContinuation(continuation);
    addReturn(root, continuation);
  }

  stackResume(root, null);
};

export const performEffect = ({ type, ...data }: Effect) => (
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
    (currentControlFrame: StackFrame) => {
      stackResume(currentFrame, handlerFnResult);
    };

  const handlerFrame = handlerFrameCreator(data, capturedContinuation);

  addReturn(handlerFrame, getReturnFrame(frameWithEffectHandler));

  stackResume(handlerFrame);
};

export const withHandler = (handler: Handler, frame: Generator) => {
  const handlerFrame = (function*() {
    return yield frame;
  })();

  addHandler(handlerFrame, handler);

  return handlerFrame;
};
