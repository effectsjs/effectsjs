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
      *log(__e__, resume) {
        const result = yield function(handler) {
          console.log(__e__.message);
        };
        return yield resume(result);
      }
    },
    (function*() {
      yield main();
    })()
  )
);
