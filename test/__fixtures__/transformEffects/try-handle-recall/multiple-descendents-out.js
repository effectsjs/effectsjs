const main = function*() {
  yield a();
};

const a = function*() {
  yield b();
};

const b = function*() {
  yield perform(Log("I did it!"));
};

runProgram(
  withHandler(
    {
      *log(data, resume) {
        const result = yield function(handler) {
          console.log(e.message);
        };
        return yield result;
      }
    },
    (function*() {
      yield main();
    })()
  )
);
