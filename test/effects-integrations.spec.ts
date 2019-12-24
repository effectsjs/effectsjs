// Following specifications outline how effects should behave as a system, testing the
//  interaction between the core components.
// This mainly revolves around when the interpreter fires what frame in what order.

import { performEffect, runProgram, stackResume, withHandler } from "../src";
import { Effect, Handler } from "../src/types/Effects";
import { assignmentPattern } from "@babel/types";

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

  test("Execution order of descendant frames", () => {
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

    runProgram(parent());

    expect(executionOrder).toEqual([
      "parent start",
      "childA start",
      "childB call",
      "childA end",
      "childB call",
      "parent end"
    ]);
  });

  test("Execution order with handlers", () => {
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

    runProgram(program);

    expect(executionOrder).toEqual([
      "parent pre effect",
      "testHandler",
      "parent post effect",
      "child pre effect",
      "testHandler",
      "child post effect"
    ]);
  });

  test("Execution order of async handlers", done => {
    const executionOrder: string[] = [];
    const addExecution = (title: string) => executionOrder.push(title);

    const handler: Handler = {
      *testCps(_, resume) {
        addExecution("testCps start");

        yield handler => {
          setTimeout(() => {
            stackResume(handler);
          }, 10);
        };

        addExecution("testCps end");
        return yield resume();
      },

      *testAsync(_, resume) {
        addExecution("testAsync start");

        yield async handler => {
          const p = new Promise(res => setTimeout(res, 10));
          await p;

          stackResume(handler);
        };

        addExecution("testAsync end");
        return yield resume();
      }
    };

    function* parent() {
      addExecution("parent pre cps effect");
      yield performEffect({ type: "testCps" });
      addExecution("parent post cps effect");
      addExecution("parent pre async effect");
      yield performEffect({ type: "testAsync" });
      addExecution("parent post async effect");
    }

    const program = withHandler(handler, parent());

    runProgram(program, () => {
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

      done();
    });
  });

  test("Async handler timing", done => {
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

    runProgram(program, done);
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

  test("Sad path with handler bubbling", () => {
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

    expect(() => {
      runProgram(withHandler(parentHandler, parent()));
    }).toThrow();
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
});
