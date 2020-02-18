const main = function*() {
  const result = yield a();
};

const a = function*() {
  const result = yield performEffect(Fetch(""));
};

runProgram(
  withHandler(
    {},
    (function*() {
      yield main();
    })()
  )
);
