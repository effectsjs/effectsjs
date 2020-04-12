import {
  addReturn,
  Continuation,
  getReturnFrame,
  StackFrame
} from "./StackFrame";
import { exists, isContinuation, isGeneratorFactory } from "./util";

enum BOUNDARY_STATE {
  UNINITIALIZED,
  INITIALIZING,
  INITIALIZED
}

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

type Thenable = (...args: any[]) => Promise<any>;

// Importing stackResume directly causes some circular dependency nonsense.
//  If this is being used in transpiled user-land, then the prelude-polyfill is a requirement.
const getStackResumeFromContext = (ctx: Boundary): Thenable => {
  const stackResume = global.stackResume ?? ctx["stackResume"];

  if (!exists(stackResume)) {
    throw new BoundaryError(
      `Missing stackResume from context. Are you using Boundary without the Effects prelude-polyfill?`
    );
  }

  return stackResume;
};

export class Boundary implements Iterator<any> {
  private state: BOUNDARY_STATE = BOUNDARY_STATE.UNINITIALIZED;
  private stackResume?: Thenable;

  [Symbol.iterator]() {
    return this;
  }

  withContext() {
    // Boundary is immutable. It may only capture the surrounding context once per instance.
    // this is because a boundary is designed to be used as shared state.
    // Allowing contexts to mutate could result in really spooky behavior that is hard to track down.
    if (this.state !== BOUNDARY_STATE.UNINITIALIZED) {
      throw new BoundaryError(
        `Attempt to mutate boundary, withContext may only be called once per Boundary instance.`
      );
    }

    this.state = BOUNDARY_STATE.INITIALIZING;

    return this;
  }

  into(
    temporalFrameCreator:
      | Continuation
      | ((...data: any[]) => StackFrame | Continuation)
  ) {
    return (...args: any[]) => {
      if (
        !isContinuation(temporalFrameCreator) &&
        !isGeneratorFactory(temporalFrameCreator)
      ) {
        throw new BoundaryError(
          `Received an invalid frame creator for .into. Expected GeneratorFunction or Continuation but received: ${typeof temporalFrameCreator}`
        );
      }

      const unlinkTemporalFrame = () => addReturn(temporalFrame, null);
      const stackResume = getStackResumeFromContext(this);

      const temporalFrame: StackFrame = (function*() {
        const frameFactory = isContinuation(temporalFrameCreator)
          ? function*(...args: any[]) {
              return yield temporalFrameCreator(...args);
            }
          : temporalFrameCreator;

        yield frameFactory(...args);
        unlinkTemporalFrame();
      })();

      addReturn(temporalFrame, getReturnFrame(this));

      return stackResume(temporalFrame);
    };
  }

  next() {
    switch (this.state) {
      case BOUNDARY_STATE.UNINITIALIZED:
        throw new BoundaryError(
          `Boundary initialized at an invalid call-site. Did you call withContext inside of try/handle?`
        );
      case BOUNDARY_STATE.INITIALIZING:
        if (!exists(getReturnFrame(this))) {
          throw new BoundaryError(
            `Boundary initialized at an invalid location. No return frame exists.`
          );
        }
        this.state = BOUNDARY_STATE.INITIALIZED;
        return { done: false, value: null };
      case BOUNDARY_STATE.INITIALIZED:
        return { done: true, value: null };
    }
  }
}
