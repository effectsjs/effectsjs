import {Continuation, StackFrame} from "./StackFrame";

// Helper method to lens a value as not null and not undefined
export const exists = <T>(x: T): x is Exclude<T, null | undefined> =>
  typeof x !== "undefined" && x !== null;

//  A Continuation is just a plain-old function.
//  But the virtual stack interpreter checks to see if frames point to "continuations" which
//  are plain old functions... helps the readability.
export const isContinuation = (x: any): x is Continuation =>
  typeof x === "function" &&
  ['AsyncGeneratorFunction', 'GeneratorFunction'].every(
      type => type !== Reflect.getPrototypeOf(x).constructor.name
  );

export const isIterator = (x: any): x is Generator =>
  exists(x) && isContinuation(x.next);

const asyncGeneratorInstance = async function*(){};

export const isAsyncGenerator = (input : Generator | AsyncGenerator ): input is AsyncGenerator =>
    Reflect.getPrototypeOf(input) === Reflect.getPrototypeOf(asyncGeneratorInstance);
