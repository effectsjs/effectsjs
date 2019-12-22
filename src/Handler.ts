import { Handler } from "./types/Effects";
import { addHandler, getReturnFrame, StackFrame } from "./StackFrame";
import { exists, isIterator, isContinuation } from "./util";

export const getResumeContinuation = (handlerCtx: any, thenRunFn: Function) => (
  handlerFnResult: any
) => (currentFrame: StackFrame) => {
  // handlerCtx.addReturn(currentFrame);
  thenRunFn(handlerFnResult);
};

export const withHandler = (handler: Handler, frame: Generator) => {
  function* getHandlerFrame() {
    return yield frame;
  }

  const handlerFrame = getHandlerFrame();
  addHandler(handlerFrame, handler);

  return handlerFrame;
};
