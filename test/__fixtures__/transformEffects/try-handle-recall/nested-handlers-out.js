function* main() {
  yield withHandler(
    {
      *parent(data, resume) {
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
      *child(data, resume) {
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
  withHandler(
    {
      *main(data, resume) {
        const result = yield function(handler) {
          stackResume(handler, true);
        };
        return yield resume(result);
      }
    },
    (function*() {
      yield main();
    })()
  )
);
