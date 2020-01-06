const fs = require('fs');

const logFileStream = fs.createWriteStream(__dirname+'/./log.txt', {flags : 'a'});
const logHandlerType = 'logHandler';

function logAndSave(message, requestContext){
    const messageToLog = `${(new Date()).toLocaleString()} - ${requestContext.connection.remoteAddress} - ${message}\n`;

    logFileStream.write(messageToLog, (err) => {
        if(err) {
            throw new Error(`Failed to write to log stream.`)
        }

        console.log(messageToLog);

        recall null;
    })
}

const LogEffect = function(message){
  return {
      type : logHandlerType,
      message
  }
};

const withLogHandler = (fn, requestContext = {}) => {
    try{
        fn();
    } handle (e){
        if(e.type === logHandlerType){
            logAndSave(e.message, requestContext);
        }
    }
};

module.exports = {
    withLogHandler,
    LogEffect
};