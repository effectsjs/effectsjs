const gatherBananasEffectType = "throwErrorHandler";
const GatherBananasEffect = () => ({ type: gatherBananasEffectType });

const gatherBananasHandler = async () => {
  setTimeout(() => {
    recall "A Bunch Of Bananas";
  }, 1);
};

const main = async () => {
  "use effects";
  try {
    const someBananas = perform GatherBananasEffect();
    if (someBananas === "A Bunch Of Bananas") {
      throw new Error("I wanted Plantains!");
    }
  } handle gatherBananasEffectType with (e) {
    gatherBananasHandler();
  }
};

module.exports.test = async ({ it, expect }) => {
  it("Should handle errors when effects recall from within a timer", async () => {
    await expect(main()).rejects.toThrowError("I wanted Plantains!");
  });
};
