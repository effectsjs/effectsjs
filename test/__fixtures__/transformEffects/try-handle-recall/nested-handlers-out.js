function* main() {
  yield withHandler(
    {
      *parent(data, resume) {
        const result = yield function(handler) {
          stackResume(handler, false);
        };
        return yield result;
      }
    },
    (function*() {
      yield parent();
      yield perform(Main());
    })()
  );
}

function* parent() {
  yield withHandler(
    {
      *child(data, resume) {
        const result = yield function(handler) {};
        return yield result;
      }
    },
    (function*() {
      yield child();
    })()
  );
}

function* child() {
  yield perform(Child());
}

runProgram(
  withHandler(
    {
      *main(data, resume) {
        const result = yield function(handler) {
          stackResume(handler, true);
        };
        return yield result;
      }
    },
    (function*() {
      yield main();
    })()
  )
);
