runProgram(
  withHandler(
    {
      *bigFun(data, resume) {
        const result = yield function(handler) {
          const performBigFunEffect = async () => {
            await Promise.resolve();
          };

          performBigFunEffect(e).then(result => {
            stackResume(handler, result);
          });
        };
        return yield result;
      }
    },
    (function*() {
      yield main();
    })()
  )
);
