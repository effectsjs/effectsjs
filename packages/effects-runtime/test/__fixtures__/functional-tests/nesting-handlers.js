const mainEffectHandler = (input) => {
  try {
    return input();
  } handle "main" with (e) {
    recall { value: "main" };
  }
};

const childEffectHandler = (input) => {
  try {
    return input();
  } handle "child" with (e) {
    recall { value: "child" };
  }
};

const main = () => {
  "use effects";
  return mainEffectHandler(() => {
    const { value } = perform { type: "main" };

    const childEffectResult = childEffectHandler(() => {
      const { value } = perform { type: "child" };

      return value;
    });

    return [value, childEffectResult];
  });
};

const throwsUnhandledEffectError = () => {
  "use effects";
  return mainEffectHandler(() => {
    const { value } = perform { type: "main" };

    const childEffectResult = childEffectHandler(() => {
      const { value } = perform { type: "child" };

      return value;
    });

    const uhOh = perform { type: "child" };

    return [value, childEffectResult];
  });
};

module.exports.test = ({ it, expect }) => {
  it("Should handle the happy-path nested child", async () => {
    const result = await main();

    expect(result).toEqual(["main", "child"]);
  });

  it("Should throw if a parent calls an effect handled by a child function", async () => {
    await expect(throwsUnhandledEffectError()).rejects.toThrowError(
      "Encountered an unhandled effect :child"
    );
  });
};
