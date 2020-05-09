const { purgeLogController } = require("./purgeLogController");
const { defaultController } = require("./defaultController");
const { LogEffect } = require("../logHandler");

module.exports.getResponseFromUri = (url) => {
  perform LogEffect(`Getting response from uri`);
  switch (url) {
    case "/purge-logs":
      return purgeLogController();
    default:
      return defaultController();
  }
};
