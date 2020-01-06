runProgram(
  withHandler(
    {
      *getResponseFromFirstMate(__e__, resume) {
        const result = yield function(handler) {
          stackResume(handler, "Aye Aye Captain!");
        };
        return yield resume(result);
      }
    },
    (function*() {
      yield aMethod();
    })()
  )
);
