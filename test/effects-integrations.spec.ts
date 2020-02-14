// Following specifications outline how effects should behave as a system, testing the
//  interaction between the core components.
// This mainly revolves around when the interpreter fires what frame in what order.

import { performEffect, runProgram, stackResume, withHandler } from "../src";
import { Effect, Handler } from "../src/types/Effects";

describe("Effect Integrations", () => {
  test("Relationship between descendent frames", () => {
    expect.assertions(1);
    const finalResult = Symbol();
    function* parent() {
      const result = yield child();
      expect(result).toBe(finalResult);
    }

    function* child() {
      return yield grandChild();
    }

    function* grandChild() {
      return finalResult;
    }

    runProgram(parent());
  });

  test("Execution order of descendant frames", async () => {
    const executionOrder: string[] = [];
    const addExecution = (title: string) => executionOrder.push(title);
    function* parent() {
      addExecution("parent start");
      yield childA();
      yield childB();
      addExecution("parent end");
    }

    function* childA() {
      addExecution("childA start");
      yield childB();
      addExecution("childA end");
    }

    function* childB() {
      addExecution("childB call");
    }

    await runProgram(parent());

    expect(executionOrder).toEqual([
      "parent start",
      "childA start",
      "childB call",
      "childA end",
      "childB call",
      "parent end"
    ]);
  });

  test("Execution order with handlers",  async() => {
    const executionOrder: string[] = [];
    const addExecution = (title: string) => executionOrder.push(title);

    const handler: Handler = {
      *test(_, resume) {
        addExecution("testHandler");

        yield resume();
      }
    };

    function* parent() {
      addExecution("parent pre effect");
      yield performEffect({ type: "test" });
      addExecution("parent post effect");
      yield child();
    }

    function* child() {
      addExecution("child pre effect");
      yield performEffect({ type: "test" });
      addExecution("child post effect");
    }

    const program = withHandler(handler, parent());

    await runProgram(program);

    expect(executionOrder).toEqual([
      "parent pre effect",
      "testHandler",
      "parent post effect",
      "child pre effect",
      "testHandler",
      "child post effect"
    ]);
  });

  test("Execution order of async handlers", async () => {
    const executionOrder: string[] = [];
    const addExecution = (title: string) => executionOrder.push(title);

    const handler: Handler = {
      *testCps(_, resume) {
        addExecution("testCps start");

        yield handler => {
          return new Promise(res => {
            setTimeout(() => {
              stackResume(handler).then(res);
            }, 10);
          });
        };

        addExecution("testCps end");
        return yield resume();
      },

      *testAsync(_, resume) {
        addExecution("testAsync start");

        yield async handler => {
          const p = new Promise(res => setTimeout(res, 10));
          await p;

          await stackResume(handler);
        };

        addExecution("testAsync end");
        return yield resume();
      }
    };

    async function* parent() {
      addExecution("parent pre cps effect");
      yield await performEffect({ type: "testCps" });
      addExecution("parent post cps effect");
      addExecution("parent pre async effect");
      yield await performEffect({ type: "testAsync" });
      addExecution("parent post async effect");
    }

    const program = (function* () {
      yield withHandler(handler, parent())
    })();

    await runProgram(program);

    expect(executionOrder).toEqual([
      "parent pre cps effect",
      "testCps start",
      "testCps end",
      "parent post cps effect",
      "parent pre async effect",
      "testAsync start",
      "testAsync end",
      "parent post async effect"
    ]);
  });

  test("Async handler timing", async () => {
    expect.assertions(4);

    const handler = {
      *testAsync(_, resume) {
        const then = Date.now();

        yield async handler => {
          const p = new Promise(res => setTimeout(res, 10));
          await p;

          stackResume(handler);
        };

        const now = Date.now();

        expect(now - then).toBeLessThanOrEqual(15);
        expect(now - then).toBeGreaterThanOrEqual(10);
        return yield resume();
      }
    };

    const program = withHandler(
      handler,
      (function*() {
        const then = Date.now();
        yield performEffect({ type: "testAsync" });
        const now = Date.now();

        expect(now - then).toBeGreaterThanOrEqual(10);
        expect(now - then).toBeLessThanOrEqual(15);
      })()
    );

    await runProgram(program);
  });

  test("Happy path with handler bubbling", () => {
    expect.assertions(1);
    const parentHandler = {
      *parent(_, resume) {
        return yield resume();
      }
    };

    const childHandler = {
      *child(_, resume) {
        return yield resume();
      }
    };

    function* parent() {
      yield performEffect({ type: "parent" });
      yield withHandler(childHandler, child());
    }

    function* child() {
      yield performEffect({ type: "parent" });
      yield performEffect({ type: "child" });
    }

    expect(() => {
      runProgram(withHandler(parentHandler, parent()));
    }).not.toThrow();
  });

  test("Sad path with handler bubbling", async () => {
    expect.assertions(1);
    const parentHandler = {
      *parent(_, resume) {
        return yield resume();
      }
    };

    const childHandler = {
      *child(_, resume) {
        return yield resume();
      }
    };

    function* parent() {
      yield performEffect({ type: "child" });
      yield withHandler(childHandler, child());
    }

    function* child() {
      yield performEffect({ type: "parent" });
      yield performEffect({ type: "child" });
    }

    await expect(runProgram(withHandler(parentHandler, parent()))).rejects.toThrow()
  });

  test("Relationship between effects", () => {
    expect.assertions(2);
    const finalResult = Symbol();
    const handler: Handler = {
      *effect1(data, resume) {
        return yield handler.effect2(null, resume);
      },
      *effect2(data, resume) {
        return yield resume(finalResult);
      }
    };

    function* parent() {
      const result = yield performEffect({ type: "effect1" });

      expect(result).toBe(finalResult);
    }

    expect(() => {
      runProgram(withHandler(handler, parent()));
    }).not.toThrow();
  });

  test('Test', async () => {
    const gatherBananasEffectType = 'throwErrorHandler';

    const GatherBananasEffect = () => ({
      type: gatherBananasEffectType
    });

    const main = () => {
      return runProgram(function* () {
        yield withHandler({
          *throwErrorHandler(__e__, resume) {
            const result = yield function (handler) {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  stackResume(handler, "Bananas")
                      .then(resolve)
                      .catch(reject);
                }, 1);
              });
            };
            return yield resume(result);
          }

        }, async function* () {
          const someBananas = yield performEffect(GatherBananasEffect());
          throw new Error('I wanted Plantains!');
        }());
      }());
    };

    await expect(main()).rejects.toThrowError();
    console.log('done');
  })
});
