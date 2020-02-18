function* main() {
  yield withHandler(
    {
      *parent(__e__, resume) {
        const result = yield function(handler) {
          stackResume(handler, false);
        };
        return yield resume(result);
      }
    },
    (function*() {
      yield parent();
      yield performEffect(Main());
    })()
  );
}

function* parent() {
  yield withHandler(
    {
      *child(__e__, resume) {
        const result = yield function(handler) {};
        return yield resume(result);
      }
    },
    (function*() {
      yield child();
    })()
  );
}

function* child() {
  yield performEffect(Child());
}

runProgram(
  (function*() {
    withHandler(
      {
        *main(__e__, resume) {
          const result = yield function(handler) {
            stackResume(handler, true);
          };
          return yield resume(result);
        }
      },
      (function*() {
        yield main();
      })()
    );
  })()
);
