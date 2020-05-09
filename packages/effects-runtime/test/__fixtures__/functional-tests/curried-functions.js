const subtract = (x) => (y) => x - y;
const program = () => {
  "use effects";
  try {
    const x = (x) => subtract(10)(x);
    return x(5);
  } handle default with (e) {
    recall null;
  }
};

module.exports.test = ({ describe, it, expect, code }) => {
  describe.only("Curried functions", () => {
    it("should transform and execute curried functions correctly", async () => {
      console.log(code);
      await expect(program()).resolves.toBe(5);
    });
  });
};
