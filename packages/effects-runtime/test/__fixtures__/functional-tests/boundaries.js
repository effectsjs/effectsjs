const { EffectBoundary } = require("effects-common");

const programOne = () => {
  const root = async () => {
    "use effects";
    try {
      const boundary = EffectBoundary();
      return Promise.all([2, 4, 6].map(boundary(x => perform { type: 'double', input : x})))
    } handle "double" with ({ input }) {
      recall (input * 2);
    }
  };

  return root();
};

const programTwo = () => {
  class Test {
    constructor({boundary}) {
      this.performThing = boundary(() => perform {type : 'any', data : 10});
    }
  }

  const root = async () => {
    "use effects";
    try {
      const boundary = EffectBoundary();
      const test = new Test({boundary});

      return test.performThing();
    } handle default with ({ data }) {
      recall `Performed an effect with data: ${data}`;
    }
  };

  return root();
};


module.exports.test = ({ it, expect, describe }) => {
  describe.only("Boundary functional tests", () => {
    it("Should produce expected results from a functional interface", async () => {
      await expect(programOne()).resolves.toEqual([4, 8, 12]);
    });

    it("Should produce expected results at the edges of the virtual stack", async () => {
      await expect(programTwo()).resolves.toBe(
        `Performed an effect with data: 10`
      );
    });
  });
};
