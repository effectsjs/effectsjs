const mainEffectHandler = (input) => {
  try {
    return input();
  } handle "main" with (e) {
    recall { value: "main" };
  }
};

const ident = (x) => x;

const performer = () => {
  return perform { type: "main" };
};

const main = () => {
  "use effects";
  return mainEffectHandler(() => {
    const { value } = performer();

    return ident(value);
  });
};

module.exports.test = ({ it, expect }) => {
  it("Should handle the happy-path nested child", async () => {
    const result = await main();

    expect(result).toEqual("main");
  });
};
