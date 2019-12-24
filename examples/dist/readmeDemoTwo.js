require('../../lib/prelude-polyfill');

const sleep = ms => new Promise(res => setTimeout(res, ms));

const main = function* () {
  yield console.log('start');
  yield performEffect({
    type: 'sleepHandler'
  });
  yield console.log('end');
};

runProgram(withHandler({
  *'sleepHandler'(data, resume) {
    const result = yield function (handler) {
      const asyncHandler = async () => {
        await sleep(1500);
        stackResume(handler, null);
      };

      asyncHandler();
    };
    return yield resume(result);
  }

}, function* () {
  yield main();
}()));