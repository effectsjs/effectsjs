import {
  addReturn,
  Continuation,
  getReturnFrame,
  StackFrame,
} from "./StackFrame";
import { exists, isContinuation, isGeneratorFactory, isIterator } from "./util";

type Thenable = (...args: any[]) => Promise<any>;
type IsolatedContinuation =
  | Continuation
  | ((...args: any[]) => StackFrame | Continuation);

const validateIC = (ic: IsolatedContinuation) =>
  isContinuation(ic) || isGeneratorFactory(ic);

declare global {
  namespace NodeJS {
    interface Global {
      stackResume?: Thenable;
    }
  }
}

export class BoundaryError extends Error {
  message: string;
  constructor(message: string) {
    super();
    this.message = message;

    Reflect.setPrototypeOf(this, BoundaryError.prototype);
  }
}

const getStackResumeFromContext = (ctx: any): Thenable => {
  const stackResume = global.stackResume ?? ctx["stackResume"];

  if (!exists(stackResume)) {
    throw new BoundaryError(
      `Missing stackResume from context. Are you using Boundary without the Effects prelude-polyfill?`
    );
  }

  return stackResume;
};

const maybeCreateFrame = (ic: IsolatedContinuation) =>
  isContinuation(ic)
    ? function* (...args: any[]) {
        return yield ic(...args);
      }
    : ic;

export const EffectBoundary = () => {
  const ctxFn = (ic: IsolatedContinuation) => (...args: any[]) => {
    if (!validateIC(ic)) {
      throw new BoundaryError(
        `Must call boundary with a function or generator function`
      );
    }

    const unlink = () => addReturn(temporalFrame, null);
    const stackResume = getStackResumeFromContext(EffectBoundary);
    const temporalFrame: StackFrame = (function* () {
      yield maybeCreateFrame(ic)(...args);
      unlink();
    })();

    addReturn(temporalFrame, getReturnFrame(ctxFn));

    return stackResume(temporalFrame);
  };

  ctxFn.next = () => ({
    value: ctxFn,
    done: !!getReturnFrame(ctxFn),
  });

  return ctxFn;
};
