const main = function*() {
  yield a();
};

const a = function*() {
  yield b();
};

const b = function*() {
  yield performEffect(Log("I did it!"));
};

runProgram(
  withHandler(
    {
      *log(data, resume) {
        const result = yield function(handler) {
          console.log(e.message);
        };
        return yield resume(result);
      }
    },
    (function*() {
      yield main();
    })()
  )
);
