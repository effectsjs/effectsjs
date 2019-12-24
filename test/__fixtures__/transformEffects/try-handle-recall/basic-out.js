runProgram(
  withHandler(
    {
      *getResponseFromFirstMate(data, resume) {
        const result = yield function(handler) {
          stackResume(handler, "Aye Aye Captain!");
        };
        return yield result;
      }
    },
    (function*() {
      yield aMethod();
    })()
  )
);
