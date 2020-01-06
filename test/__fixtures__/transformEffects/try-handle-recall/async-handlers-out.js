runProgram(
  withHandler(
    {
      *bigFun(__e__, resume) {
        const result = yield function(handler) {
          const performBigFunEffect = async () => {
            await Promise.resolve();
          };

          performBigFunEffect(__e__).then(result => {
            stackResume(handler, result);
          });
        };
        return yield resume(result);
      }
    },
    (function*() {
      yield main();
    })()
  )
);
