const main = () => {
  "use effects";
  try {
    return perform { type: "effect", data: "data" };
  } handle "effect" with (e) {
    recall e.data;
  }
};

const dynamicEffect = (effect) => {
  "use effects";
  try {
    return perform effect;
  } handle "effectA" with (e) {
    recall "effectA";
  } handle "effectB" with (e) {
    if (e.data === 1) {
      recall true;
    } else {
      recall false;
    }
  }
};
module.exports.test = ({ it, expect, code }) => {
  it("Should pass data into handler variable", async () => {
    const result = await main();

    expect(result).toBe("data");
  });

  it("Should respond to dynamic effect passing", async () => {
    const result = await dynamicEffect({ type: "effectA" });

    expect(result).toBe("effectA");
  });

  it("Should recall dynamically", async () => {
    const resultA = await dynamicEffect({ type: "effectB", data: 1 });
    const resultB = await dynamicEffect({ type: "effectB", data: 2 });

    expect(resultA).toBe(true);
    expect(resultB).toBe(false);
  });
};
