const child = () => {
  throw new Error("from child");
};

const singleLevel = async () => {
  "use effects";
  try {
    try {
      child();
    } catch (e) {
      return perform { type: "rootEffect" };
    }
  } handle "rootEffect" with (e) {
    recall "rootEffect";
  }
};

const parent = () => {
  const result = perform { type: "getOne" };
  try {
    return result + child(result);
  } catch (e) {
    return result;
  }
};

const errorBoundaries = async () => {
  "use effects";
  try {
    return parent();
  } handle "getOne" with (e) {
    recall 1;
  }
};

const parentThatDoesntCatch = () => {
  return child();
};

const exceptionBubbling = async () => {
  "use effects";
  try {
    return parentThatDoesntCatch();
  } handle default with (e) {
    recall null;
  }
};

module.exports.test = ({ expect, it }) => {
  it("Should catch exceptions as expected", async () => {
    await expect(singleLevel()).resolves.toBe("rootEffect");
  });

  it("Should catch exceptions at boundaries as expected", async () => {
    await expect(errorBoundaries()).resolves.toBe(1);
  });

  it("Should bubble exceptions as expected", async () => {
    await expect(exceptionBubbling()).rejects.toThrow("from child");
  });
};
