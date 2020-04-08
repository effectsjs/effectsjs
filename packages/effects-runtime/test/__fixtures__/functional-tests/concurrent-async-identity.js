const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const asyncIdentity = (name) => {
  return perform { type: "async_identity", payload: { name } };
};

const work = async (name) => {
  "use effects";
  try {
    return asyncIdentity(name);
  } handle "async_identity" with (e) {
    const {
      payload: { name },
    } = e;
    await delay(name === "a" ? 100 : 1);
    recall name;
  }
};

function main() {
  const aP = work("a");
  const bP = work("b");
  const cP = work("c");
  return Promise.all([aP, bP, cP]);
}

module.exports.test = ({ it, expect }) => {
  it("Should return out-of-order, concurrent effect-roots back in called order", async () => {
    const result = await main();
    expect(result).toEqual(["a", "b", "c"]);
  });
};
