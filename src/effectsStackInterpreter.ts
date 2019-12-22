import {
  addReturn,
  getReturnFrame,
  findHandlerFrame,
  StackFrame,
  Continuation,
  withFrameContext,
  isRootContinuation,
  FrameLink,
  setRootContinuation
} from "./StackFrame";
import { Handler } from "./types/Effects";
import { getResumeContinuation, withHandler } from "./Handler";

import { isIterator, isContinuation, exists } from "./util";

export const resumeGenerator = (gen: Generator | StackFrame, args: any) => {
  try {
    if (!isIterator(gen))
      throw new TypeError(
        `Received a non-iterator-like input at top-level resume call. This is likely a plumbing issue. And if you're encountering this, the babel-plugin-effects-transform is likely acting up.`
      );

    const { value, done } = gen.next(args);

    if (done) {
      const returnFrame = getReturnFrame(gen);

      if (isIterator(returnFrame)) {
        resumeGenerator(returnFrame, value);
      } else if (isContinuation(returnFrame)) {
        returnFrame(value);
      }
    } else {
      if (isIterator(value)) {
        addReturn(value, gen);
        resumeGenerator(value, null);
      } else if (isContinuation(value)) {
        value(gen);
      } else {
        resumeGenerator(gen, value);
      }
    }
  } catch (e) {
    unwindStack(e, gen);
  }
};

export const unwindStack = (e: Error | any, offensiveFrame: StackFrame) => {
  let next: FrameLink = offensiveFrame;

  while (exists(next) && !isRootContinuation(next)) next = getReturnFrame(next);

  if (isContinuation(next)) next(e);
  else throw e;
};

export const run = (gen: Generator, arg?: any, complete?: Continuation) => {
  // Link the return frame to the initial stack frame prior to running.
  // _I think_ This will be used exclusively for error handling
  if (exists(complete)) {
    addReturn(gen, complete);
    setRootContinuation(complete);
  }

  resumeGenerator(gen, arg);
};

export const withEffects = (
  effectHandlers: Array<Handler>,
  root: GeneratorFunction,
  complete: Continuation
): void => {
  // @ts-ignore
  const f = withHandler(effectHandlers[0], root());

  const composition = effectHandlers
    .slice(1)
    .reduce((c, h) => withHandler(h, c), f);

  return run(
    (function*() {
      return yield composition;
    })(),
    null,
    complete
  );
};

export const perform = (type: string | number, data: any) => {
  return (performFrame: StackFrame) => {
    const handlerFrame = findHandlerFrame(performFrame, type);

    if (!exists(handlerFrame)) {
      // TODO: This needs to be a custom error that reorts the state of the virtual stack, not the call-stack.
      const e = new Error(`Encountered an unhandled effect: ${type}`);
      e.stack = e?.stack
        ?.split("\n")
        .slice(0, 1)
        .join("");
      throw e;
    }

    const handlerCtx = withFrameContext(handlerFrame);
    const handler = handlerCtx.getHandler(type)!;

    const performFn = (handlerResult: any) =>
      resumeGenerator(performFrame, handlerResult);

    const resumeContinuation = getResumeContinuation(handlerCtx, performFn);
    const handlerResultFrame = handler(data, resumeContinuation);

    addReturn(handlerResultFrame, handlerCtx.getReturnFrame());

    resumeGenerator(handlerResultFrame, null);
  };
};
