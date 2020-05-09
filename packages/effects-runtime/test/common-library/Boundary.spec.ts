import {Boundary, BoundaryError, EffectBoundary} from "effects-common";
import {
  stackResume,
  runProgram,
  performEffect,
  withHandler,
  DefaultEffectHandler,
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
  },
};

describe("Effects Boundaries", () => {
  beforeAll(() => {
    EffectBoundary['stackResume'] = stackResume;
  });

  it("Should evaluate a stackframe from within a boundary", async () => {
    function* main() {
      const boundary = yield EffectBoundary();
      return [2, 4, 6].map(
          boundary(function* (data) {
            return yield performEffect({ type: "", data });
          })
      );
    }

    const program = function* () {
      return yield withHandler(defaultHandler, main());
    };

    const result = await runProgram(program());

    await expect(Promise.all(result)).resolves.toEqual([4, 8, 12]);
  });

  // Skip for rfc, this isnt needed anymore
  it.skip("Should throw an error upon attempt to mutate context", async () => {
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
    const handler: Handler = {
      *[DefaultEffectHandler](e, resume) {
        return yield resume("yay");
      },
    };

    async function* root() {
      const boundary = yield EffectBoundary();

      const boundaryResult = await (boundary(function* () {
        return yield performEffect({ type: "any" });
      }))();

      expect(boundaryResult).toBe("yay");

      const two = 1 + 1;
      yield await performEffect({ type: "any" });

      return yield `yay ${two}`;
    }

    const programResult = await runProgram(withHandler(handler, root()));

    expect(programResult).toBe(`yay 2`);
  });

  // Skip for RFC, no longer stateful in this way.. so no need to worry!
  it.skip("Should throw when yielded prior to initialization", async () => {
    const boundary = createBoundary();

    function* main() {
      yield boundary;
    }

    await expect(runProgram(main())).rejects.toThrowError(BoundaryError);
  });

  it("Should catch errors and reject when a perform throws", async () => {
    const handler: Handler = {
      *["IThrow"]() {
        throw "cool";
      },
    };

    function* main() {
      const boundary = yield EffectBoundary();

      return (boundary(function* () {
        return yield performEffect({ type: "IThrow" });
      }))();
    }

    await expect(runProgram(withHandler(handler, main()))).rejects.toBe("cool");
  });

  // @todo rfc: this isn't really needed anymore, boundaries don't preserve state
  it("Should be context-agnostic in terms of where the boundary is executed", async () => {
    const parentHandlerType = Symbol();
    const childHandlerType = Symbol();
    const doubleHandlerType = Symbol();

    const parentHandler: Handler = {
      *[parentHandlerType](e, resume) {
        return yield resume("parent");
      },
      *[doubleHandlerType]({ num }, resume) {
        return yield resume(num * 2);
      },
    };

    const childHandler: Handler = {
      *[childHandlerType](e, resume) {
        return yield resume("child");
      },
    };

    const child = async function* (input) {
      const boundary = yield EffectBoundary();
      const performResult = yield await performEffect({
        type: childHandlerType,
      });
      const doubleList = await Promise.all(
        [2, 4, 6].map(
          boundary(function* (x) {
            return yield performEffect({ type: doubleHandlerType, num: x });
          })
        )
      );

      return yield `${performResult} ${input} ${doubleList.join(" ")}`;
    };

    const parent = async function* () {
      const boundary = yield EffectBoundary();
      const firstPerformResult = yield await performEffect({
        type: parentHandlerType,
      });
      const childResult = yield withHandler(
        childHandler,
        child(firstPerformResult)
      );
      const secondPerformResult = yield await performEffect({
        type: parentHandlerType,
      });
      const doubleList = await Promise.all(
        [4, 8, 12].map(
          boundary(function* (x) {
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
    const expectedResult = Symbol();

    function* main() {
      const boundary = yield EffectBoundary();
      return (boundary(function* () {
        return expectedResult;
      }))();
    }

    await expect(runProgram(function*(){ return yield main() }())).resolves.toBe(expectedResult);
  });

  it("Should handle normal exceptions transparently", async () => {
    function* main() {
      const boundary = yield EffectBoundary();
      return boundary(function* () {
        throw 1337;
      })();
    }

    await expect(runProgram(function*(){return yield main()}())).rejects.toBe(1337);
  });


  it("Should accept a continuation as a temporal frame creator", async () => {
    const expectedResult = Symbol();

    function* root() {
      const boundary = yield EffectBoundary();
      return (boundary(() => expectedResult))();
    }

    await expect(runProgram(function*(){
      yield root()
    }())).resolves.toBe(expectedResult);
  });

  it("Should throw if passed an incorrect argument", async () => {

    function* root() {
      // @ts-ignore
      return yield new EffectBoundary("hello")();
    }

    await expect(runProgram(root())).rejects.toThrowError(BoundaryError);
  });
});
