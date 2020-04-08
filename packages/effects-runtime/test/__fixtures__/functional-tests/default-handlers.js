const effectType = Symbol();

const main = async (data) => {
  "use effects";
  try {
    let result = perform { type: effectType, data };
    result += perform { data: result };

    return result;
  } handle effectType with ({ data }) {
    recall (data + 1);
  } handle default with ({ data }) {
    recall (data * 2);
  }
};

module.exports.test = ({ it, expect, code }) => {
  it("Should handle a non-explicitly declared effect when a default effect handler when present", async () => {
    const result = await main(1);

    expect(result).toBe(6);
  });
};
