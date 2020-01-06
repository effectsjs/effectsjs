require('../../lib/prelude-polyfill');

const main = function* () {
  const result = yield performEffect({
    type: 'timesTwo',
    number: 5
  });
  yield console.log(result);
};

withHandler({
  *timesTwo(__e__, resume) {
    const result = yield function (handler) {
      const timesTwoHandler = number => {
        stackResume(handler, number * 2);
      };

      timesTwoHandler(__e__.number);
    };
    return yield resume(result);
  }

}, function* () {
  yield main();
}());