import {
  stackResume,
  runProgram,
  perform,
  withHandler,
  InvalidStackFrameError,
  UnhandledEffectError
} from "../src";
import {
  addHandler,
  addReturn,
  Continuation,
  getHandler,
  isRootContinuation,
  setRootContinuation
} from "../src/StackFrame";
import { Handler, HandlerDefinition } from "../src/types/Effects";

describe("Effects Unit Tests", () => {
  describe("stackResume", () => {
    it("Should throw an InvalidStackFrame error upon receiving a non generator input", () => {
      const dummyFrame = ((() => {}) as unknown) as Generator;
      expect(() => stackResume(dummyFrame)).toThrowError(
        InvalidStackFrameError
      );
    });

    it("Should run a generator until completion", () => {
      function* test() {
        yield 1;
        yield 2;
        yield 3;
      }

      const testInstance = test();

      stackResume(testInstance);

      expect(testInstance.next()).toEqual({
        value: undefined,
        done: true
      });
    });

    it("Should run a generator with values yielded", () => {
      function* test() {
        const valA = yield 1;
        expect(valA).toBe(1);
        const valB = yield 2;
        expect(valB).toBe(2);
        const valC = yield 3;
        expect(valC).toBe(3);
      }

      stackResume(test());
    });

    it(`Should call a continuation yielded by a generator with the generator as it's only argument`, () => {
      const spy = jest.fn();
      function* test() {
        yield spy;
      }
      const testInstance = test();

      stackResume(testInstance);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(testInstance);
    });

    it(`Should resume a generator yielded by a generator`, () => {
      const childSpy = jest.fn();

      function* parent() {
        yield child();
      }

      function* child() {
        childSpy();
        yield;
        childSpy();
      }

      stackResume(parent());

      expect(childSpy).toHaveBeenCalledTimes(2);
    });

    it(`Should preserve execution order of parent/child frames`, () => {
      const executionOrder: any[] = [];
      const addExecution = (input: any) => void executionOrder.push(input);

      function* parent() {
        addExecution("parent1");
        yield child();
        addExecution("parent2");
      }

      function* child() {
        addExecution("child1");
        yield;
        addExecution("child2");
        yield;
      }

      stackResume(parent());

      expect(executionOrder).toMatchSnapshot([
        "parent1",
        "child1",
        "child2",
        "parent2"
      ]);
    });

    it(`Should return the result of the child frame to the parent `, () => {
      expect.assertions(1);
      const result = Symbol();
      function* parent() {
        const value = yield child();

        expect(value).toBe(result);
      }

      function* child() {
        yield;

        return result;
      }

      stackResume(parent());
    });

    it(`Should call the return frame if the return frame is a continuation`, () => {
      const result = Symbol();
      function* test() {
        yield;

        return result;
      }

      const testInstance = test();
      const continuation = jest.fn();

      addReturn(testInstance, continuation);

      stackResume(testInstance);

      expect(continuation).toHaveBeenCalledWith(result);
    });

    it(`Should throw an error should no root continuation exist`, () => {
      function* test() {
        yield;
        throw new Error("Error");
      }

      expect(() => stackResume(test())).toThrowError("Error");
    });

    it(`Should pass an error onto the root continuation if it exists`, () => {
      const error = new Error("Error");
      function* test() {
        yield;
        throw error;
      }

      const rootContinuation = jest.fn();
      const program = test();

      setRootContinuation(rootContinuation);
      addReturn(program, rootContinuation);

      expect(() => stackResume(program)).not.toThrow();

      expect(rootContinuation).toHaveBeenCalledWith(error);
    });
  });

  describe("runProgram", () => {
    it("Should run a generator through the interpreter", () => {
      expect.assertions(2);

      function* main() {
        expect(true).toBeTruthy();
        yield;
        expect(true).toBeTruthy();
      }

      runProgram(main());
    });

    it("Should attach and run the supplied continuation as the root continuation of the program", () => {
      const programResult = Symbol();
      const rootContinuation = jest.fn();

      function* main() {
        yield;
        return programResult;
      }

      runProgram(main(), rootContinuation);

      expect(isRootContinuation(rootContinuation)).toBe(true);
      expect(rootContinuation).toHaveBeenCalledTimes(1);
      expect(rootContinuation).toHaveBeenCalledWith(programResult);
    });
  });

  describe("withHandler", () => {
    it("Should return a frame with handler field", () => {
      const handler: Handler = {
        *handle(data, resume) {}
      };
      function* main() {}

      const program = main();
      const frame = withHandler(handler, program);

      expect(getHandler(frame, "handle")).toBe(handler.handle);
    });

    it("Should return a frame that yields the input frame as its only action", () => {
      const handler = {
        *handle() {}
      };
      function* main() {}
      const program = main();

      const handlerFrame = withHandler(handler, program);

      const { value } = handlerFrame.next();

      expect(value).toBe(program);
    });
  });

  describe("perform", () => {
    it("Should throw when a frame performs an effect that has not be handled", () => {
      const performContinuation = perform({ type: "nonexist" });

      expect(performContinuation).toThrowError(UnhandledEffectError);
    });

    it("Should call an effect handler", () => {
      const handlerSpy = jest.fn();
      const handler: Handler = {
        *test(_, resume) {
          handlerSpy();
          resume();
        }
      };

      const controlFrame = (function* main() {
        yield perform({ type: "test" });
      })();

      addHandler(controlFrame, handler);
      stackResume(controlFrame);

      expect(handlerSpy).toHaveBeenCalled();
    });

    it("Should pass an effect handler data from the current frame", () => {
      const handlerSpy = jest.fn();
      const expectedValue = Symbol();
      const handler: Handler = {
        *test(data, resume) {
          handlerSpy(data);
          return yield resume();
        }
      };

      const controlFrame = (function* main() {
        yield perform({ type: "test", data: expectedValue });
      })();

      addHandler(controlFrame, handler);
      stackResume(controlFrame);

      expect(handlerSpy).toHaveBeenCalledWith(expectedValue);
    });

    it("Should pass an data from the effect handler back to the control frame", () => {
      const controlFrameSpy = jest.fn();
      const expectedValue = Symbol();
      const handler: Handler = {
        *test(_, resume) {
          return yield resume(expectedValue);
        }
      };

      const controlFrame = (function* main() {
        const result = yield perform({ type: "test", data: expectedValue });
        controlFrameSpy(result);
      })();

      addHandler(controlFrame, handler);
      stackResume(controlFrame);

      expect(controlFrameSpy).toHaveBeenCalledWith(expectedValue);
    });

    it("Should fire arbitrary continuations before passing control back to the control frame", () => {
      const continuationSpy = jest.fn();
      const controlFrameSpy = jest.fn();
      const handler: Handler = {
        *test(_, resume) {
          yield handler => {
            continuationSpy();
            stackResume(handler);
          };

          yield handler => {
            continuationSpy();
            stackResume(handler);
          };

          return yield resume();
        }
      };

      const controlFrame = (function* main() {
        yield perform({ type: "test" });
        controlFrameSpy();
      })();

      addHandler(controlFrame, handler);
      stackResume(controlFrame);

      expect(continuationSpy).toHaveBeenCalledTimes(2);
      expect(controlFrameSpy).toHaveBeenCalledTimes(1);
      expect(continuationSpy.mock.invocationCallOrder[1]).toBeLessThan(
        controlFrameSpy.mock.invocationCallOrder[0]
      );
    });

    it("Should pass data computed in continuations back to the handler", done => {
      expect.assertions(1);
      const expectedResult = Symbol();

      const handler: Handler = {
        *test(_, resume) {
          const result = yield handler => {
            setTimeout(() => {
              stackResume(handler, expectedResult);
            }, 1);
          };

          return yield resume(result);
        }
      };

      const controlFrame = (function* main() {
        const result = yield perform({ type: "test" });

        expect(result).toBe(expectedResult);
      })();

      addHandler(controlFrame, handler);
      // Note: because the test handler is async, we need to let jest know when
      //  the interpreter has finished.
      addReturn(controlFrame, done);

      stackResume(controlFrame);
    });
  });
});
