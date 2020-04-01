import {addReturn, getReturnFrame, StackFrame} from "./StackFrame";
import { exists } from "./util";

type Thenable = (...args: any[]) => Promise<any>;

declare global {
  namespace NodeJS {
    interface Global {
      stackResume?: Thenable;
    }
  }
}

const getStackResumeFromContext = (ctx: Boundary): Thenable => {
  if (!exists(global.stackResume) && !exists(ctx['stackResume'])) {
    throw new Error(
      `Missing stackResume from context. Are you using Boundary without the prelude-runtime?`
    );
  }

  // @ts-ignore
  return global.stackResume || ctx['stackResume'];
};

enum BOUNDARY_STATE{
  UNINITIALIZED,
  INITIALIZING,
  INITIALIZED
}

export class Boundary implements Iterator<any>{
  private initializationState : BOUNDARY_STATE = BOUNDARY_STATE.UNINITIALIZED;
  private stackResume = undefined;

  [Symbol.iterator](){
    return this;
  }

  withContext(){
    this.initializationState = BOUNDARY_STATE.INITIALIZING;
    return this;
  }

  into(temporalFrameCreator : GeneratorFunction){
    return (...args : any[]) => {
      const temporalFrame : StackFrame = (function* () {
        yield temporalFrameCreator(...args);
        // @ts-ignore
        addReturn(temporalFrame, null);
      })();

      addReturn(temporalFrame, getReturnFrame(this));


      return getStackResumeFromContext(this)(temporalFrame);
    }
  }

  next(value : any){
    switch(this.initializationState){
      case BOUNDARY_STATE.UNINITIALIZED : throw new Error(`Boundary initialized at an invalid call-site. Did you call withContext from with a Virtual Stack Frame?`);
      case BOUNDARY_STATE.INITIALIZING :
        if(!exists(getReturnFrame(this))){
          throw new RangeError(`Boundary initialized at an invalid location. No return frame exists.`);
        }
        this.initializationState = BOUNDARY_STATE.INITIALIZED;
        return {done : false, value};
      case BOUNDARY_STATE.INITIALIZED: return {done : true, value}
    }
  }
}