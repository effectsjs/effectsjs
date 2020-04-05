function main() {
  "use effects";
  try {
    return getMessage({
      population: 7700000000,
    });
  } handle "get_greeting" with (evt) {
    recall "Hello";
  }
}

function getMessage({ population }) {
  const greeting = perform { type: "get_greeting" };
  return `${greeting}, ${getAudience(population)}!`;
}

function getAudience(population) {
  return perform { type: "get_audience", payload: population };
}

module.exports.test = ({ it, expect }) => {
  it("Should create hello-world from multiple-performs", async () => {
    const result = await main();
    expect(result).toBe("Hello, world!");
  });
};
