const fs = require('fs');

const logFileStream = fs.createWriteStream(__dirname + '/./log.txt', {
  flags: 'a'
});
const logHandlerType = 'logHandler';

const LogEffect = function (message) {
  return {
    type: logHandlerType,
    message
  };
};

const withLogHandler = function* (fn, requestContext = {}) {
  return yield withHandler({
    *logHandler(__e__, resume) {
      const result = yield function (handler) {
        function logAndSave(message, requestContext) {
          const messageToLog = `${new Date().toLocaleString()} - ${requestContext.connection.remoteAddress} - ${message}\n`;
          logFileStream.write(messageToLog, err => {
            try{
              if (err) {
                throw new Error(`Failed to write to log stream.`);
              }

              console.log(messageToLog);
              stackResume(handler, null);
            }catch(e){
              console.log('Gasp', handler);
              stackResume(handler, e);
            }
          });
        }

        try{
          logAndSave(__e__.message, requestContext);
        }catch(e){
          console.log('hereee');
        }
      };
      console.log('hello', result)
      return yield resume(result);
    }

  }, function* () {
    yield fn();
  }());
};

module.exports = {
  withLogHandler,
  LogEffect
};