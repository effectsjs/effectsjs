require('../../lib/prelude-polyfill');

runProgram(withHandler({
  *'effect'(data, resume) {
    const result = yield function (handler) {
      stackResume(handler, "Effect Result");
    };
    return yield resume(result);
  }

}, function* () {
  const result = yield performEffect({
    type: 'effect'
  });
  yield console.log(result);
}()));