import { addReturn, StackFrame } from "./StackFrame";
import { exists } from "./util";

type Thenable = (...args: any[]) => Promise<any>;

declare global {
  namespace NodeJS {
    interface Global {
      stackResume?: Thenable;
    }
  }
}

interface BoundaryContext {
  stackResume?: Thenable;
}

const getStackResumeFromContext = (ctx: BoundaryContext): Thenable => {
  if (!exists(global.stackResume) && !exists(ctx.stackResume)) {
    throw new Error(
      `Missing stackResume from context. Are you using Boundary without the prelude-runtime?`
    );
  }

  // @ts-ignore
  return global.stackResume || ctx.stackResume;
};

export const Boundary = function Boundary(
  this: BoundaryContext,
  contextFrame: Generator
) {
  return (frameCreator: GeneratorFunction) => (...args: any[]) => {
    const temporalFrame: StackFrame = frameCreator(...args);

    addReturn(temporalFrame, contextFrame);

    return getStackResumeFromContext(this)(temporalFrame);
  };
};
