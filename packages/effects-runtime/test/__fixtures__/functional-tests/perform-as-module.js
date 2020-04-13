let dynamicRequire = () => {};

const effectResult = Symbol();

const main = () => {
  "use effects";
  try {
    const { method } = dynamicRequire();

    return method();
  } handle "effect" with (e) {
    recall effectResult;
  }
};

module.exports.test = ({ it, expect }) => {
  it("Should it should handle a method that performs, unknown at compile time", async () => {
    dynamicRequire = () => ({
      *method() {
        return yield performEffect({ type: "effect" });
      },
    });

    const result = await main();

    expect(result).toBe(effectResult);
  });

  it("Should run a normal function unknown at compile time", async () => {
    const expectedResult = Symbol();

    dynamicRequire = () => ({
      method() {
        return expectedResult;
      },
    });

    const result = await main();

    expect(result).toBe(expectedResult);
  });
};
