const entry = () => {
  try {
    throw new Error("error");
  } handle default with (e) {}
};

const asyncNotCaught = async () => {
  "use effects";
  entry();
};

const asyncCaught = async () => {
  try {
    ("use effects");
    entry();
  } catch (e) {
    // swallow error
  }
};

module.exports.test = ({ it, expect, code }) => {
  it("Should await runtime root when parent function is async", async () => {
    expect(asyncNotCaught()).rejects.toThrow("error");
  });

  it("Should await runtime within a try/catch if parent function is async", () => {
    expect(asyncCaught()).resolves.toBeUndefined();
  });
};
