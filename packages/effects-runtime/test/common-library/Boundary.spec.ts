import { Boundary, BoundaryError } from "effects-common";
import {
  stackResume,
  runProgram,
  performEffect,
  withHandler,
  DefaultEffectHandler
} from "../../src/runtime";
import { Handler } from "effects-common";

const injectContext = (boundary: Boundary) =>
  Reflect.set(boundary, "stackResume", stackResume);
const createBoundary = () => {
  const boundary = new Boundary();
  injectContext(boundary);

  return boundary;
};

const defaultHandler: Handler = {
  *[DefaultEffectHandler]({ data }, resume) {
    yield resume(data * 2);
  }
};

describe("Effects Boundaries", () => {
  it("Should evaluate a stackframe from within a boundary", async () => {
    const boundary = createBoundary();

    function* main() {
      yield boundary.withContext();
      return [2, 4, 6].map(
        boundary.into(function*(data) {
          return yield performEffect({ type: "", data });
        })
      );
    }

    const program = function*() {
      return yield withHandler(defaultHandler, main());
    };

    const result = await runProgram(program());

    await expect(Promise.all(result)).resolves.toEqual([4, 8, 12]);
  });

  it("Should throw an error upon attempt to mutate context", async () => {
    const boundary = createBoundary();

    function* parent() {
      yield boundary.withContext();
      yield child();
    }

    function* child() {
      yield boundary.withContext();
    }

    await expect(runProgram(parent())).rejects.toThrowError(BoundaryError);
  });

  it("Should return expected results if operations are performed after invoking a boundary", async () => {
    const boundary = createBoundary();

    const handler: Handler = {
      *[DefaultEffectHandler](e, resume) {
        return yield resume("yay");
      }
    };

    async function* root() {
      yield boundary.withContext();

      const boundaryResult = await boundary.into(function*() {
        return yield performEffect({ type: "any" });
      })();

      expect(boundaryResult).toBe("yay");

      const two = 1 + 1;
      yield await performEffect({ type: "any" });

      return yield `yay ${two}`;
    }

    const programResult = await runProgram(withHandler(handler, root()));

    expect(programResult).toBe(`yay 2`);
  });

  it("Should throw when yielded prior to initialization", async () => {
    const boundary = createBoundary();

    function* main() {
      yield boundary;
    }

    await expect(runProgram(main())).rejects.toThrowError(BoundaryError);
  });

  it("Should catch errors and reject when a perform throws", async () => {
    const boundary = createBoundary();
    const handler: Handler = {
      *["IThrow"]() {
        throw "cool";
      }
    };

    function* main() {
      yield boundary.withContext();

      return boundary.into(function*() {
        return yield performEffect({ type: "IThrow" });
      })();
    }

    await expect(runProgram(withHandler(handler, main()))).rejects.toBe("cool");
  });

  it("Should be context-agnostic in terms of where the boundary is executed", async () => {
    const boundary = createBoundary();
    const parentHandlerType = Symbol();
    const childHandlerType = Symbol();
    const doubleHandlerType = Symbol();

    const parentHandler: Handler = {
      *[parentHandlerType](e, resume) {
        return yield resume("parent");
      },
      *[doubleHandlerType]({ num }, resume) {
        return yield resume(num * 2);
      }
    };

    const childHandler: Handler = {
      *[childHandlerType](e, resume) {
        return yield resume("child");
      }
    };

    const child = async function*(input) {
      const performResult = yield await performEffect({
        type: childHandlerType
      });
      const doubleList = await Promise.all(
        [2, 4, 6].map(
          boundary.into(function*(x) {
            return yield performEffect({ type: doubleHandlerType, num: x });
          })
        )
      );

      return yield `${performResult} ${input} ${doubleList.join(" ")}`;
    };

    const parent = async function*() {
      yield boundary.withContext();
      const firstPerformResult = yield await performEffect({
        type: parentHandlerType
      });
      const childResult = yield withHandler(
        childHandler,
        child(firstPerformResult)
      );
      const secondPerformResult = yield await performEffect({
        type: parentHandlerType
      });
      const doubleList = await Promise.all(
        [4, 8, 12].map(
          boundary.into(function*(x) {
            return yield performEffect({ type: doubleHandlerType, num: x });
          })
        )
      );

      return yield `${doubleList.join(
        " "
      )} ${secondPerformResult} ${childResult}`;
    };

    const program = withHandler(parentHandler, parent());
    const programResult = await runProgram(program);

    expect(programResult).toBe(`8 16 24 parent child parent 4 8 12`);
  });

  it("Should return values transparently", async () => {
    const boundary = createBoundary();
    const expectedResult = Symbol();

    function* main() {
      yield boundary.withContext();

      return yield boundary.into(function*() {
        return expectedResult;
      })();
    }

    await expect(runProgram(main())).resolves.toBe(expectedResult);
  });

  it("Should handle normal exceptions transparently", async () => {
    const boundary = createBoundary();

    function* main() {
      yield boundary.withContext();

      return yield boundary.into(function*() {
        throw 1337;
      })();
    }

    await expect(runProgram(main())).rejects.toBe(1337);
  });

  it("Should preserve boundaries after the program has run", async () => {
    const boundary = createBoundary();
    const handler: Handler = {
      *[DefaultEffectHandler](_, resume) {
        return yield resume("it works!");
      }
    };

    function* root() {
      yield boundary.withContext();
      return yield "complete";
    }

    const programResult = await runProgram(withHandler(handler, root()));

    expect(programResult).toBe("complete");

    const result = await boundary.into(function*() {
      return yield performEffect({ type: "anything at all" });
    })();

    expect(result).toBe("it works!");
  });
});
