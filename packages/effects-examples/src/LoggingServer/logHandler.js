const { promises: fsPromise, ...fs } = require("fs");
const path = require("path");

const logFilePath = path.resolve(__dirname, "log.txt");
console.log(`Logs streaming to disk at ${logFilePath}`);
let logFileStream = fs.createWriteStream(logFilePath, { flags: "a" });
const logHandlerType = "logHandler";

const writeToDisk = (message) =>
  new Promise((res, rej) => {
    logFileStream.write(message, (err) => {
      if (err) {
        console.log("pst, an error occured");
        rej(Error(`Failed to write to log stream.`));
      }

      res();
    });
  });

const logAndSave = async (message, requestContext) => {
  const messageToLog = `${new Date().toLocaleString()} - ${
    requestContext.connection.remoteAddress
  } - ${message}\n`;

  try {
    await fsPromise.stat(logFilePath);
  } catch (e) {
    logFileStream = fs.createWriteStream(logFilePath, { flags: "a" });
  }
  await writeToDisk(messageToLog);
  console.log(messageToLog);

  recall null;
};

const LogEffect = function (message) {
  return {
    type: logHandlerType,
    message,
  };
};

const withLogHandler = async (fn, requestContext = {}) => {
  try {
    return fn();
  } handle logHandlerType with (e) {
    await logAndSave(e.message, requestContext);
  }
};

module.exports = {
  withLogHandler,
  LogEffect,
};
