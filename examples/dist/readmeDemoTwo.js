require('../../lib/prelude-polyfill');

const sleep = ms => new Promise(res => setTimeout(res, ms));

const main = function* () {
  yield console.log('main start');
  const performResult = yield performEffect({
    type: 'sleepHandler'
  });
  yield console.log(performResult);
  yield console.log('main end');
};

withHandler({
  *sleepHandler(__e__, resume) {
    const result = yield function (handler) {
      const asyncHandler = async () => {
        const start = Date.now();
        await sleep(1500);
        stackResume(handler, {
          start,
          end: Date.now()
        });
      };

      asyncHandler();
    };
    return yield resume(result);
  }

}, function* () {
  yield main();
}());