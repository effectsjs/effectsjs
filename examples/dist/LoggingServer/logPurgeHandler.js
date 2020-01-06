const fs = require('fs');

const logPurgeType = 'log_purge';

const LogPurgeEffect = () => ({
  type: logPurgeType
});

const withLogPurgeHandler = function* (fn) {
  return yield withHandler({
    *log_purge(__e__, resume) {
      const result = yield function (handler) {
        fs.unlink(__dirname + './log.txt', err => {
          if (err) {
            stackResume(handler, new Error(`Failed to purge logs`));
          }

          stackResume(handler, null);
        });
      };
      return yield resume(result);
    }

  }, function* () {
    yield fn();
  }());
};

module.exports = {
  LogPurgeEffect,
  withLogPurgeHandler
};