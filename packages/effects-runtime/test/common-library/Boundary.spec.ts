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

  it("Should throw when yielded prior to initialization", async () => {
    const boundary = createBoundary();

    function* main() {
      yield boundary;
    }

    await expect(runProgram(main())).rejects.toThrowError(BoundaryError);
  });
});
