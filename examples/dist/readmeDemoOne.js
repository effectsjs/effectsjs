require('../../lib/prelude-polyfill');

withHandler({
  *effect(__e__, resume) {
    const result = yield function (handler) {
      stackResume(handler, "Effect Result");
    };
    return yield resume(result);
  }

}, function* () {
  const result = yield performEffect({
    type: 'effect'
  });
  console.log(result);
}());