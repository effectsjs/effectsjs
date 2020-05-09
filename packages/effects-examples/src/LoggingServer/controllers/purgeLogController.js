const { LogPurgeEffect } = require("../logPurgeHandler");
const { LogEffect } = require("../logHandler");

module.exports.purgeLogController = () => {
  const error = perform LogPurgeEffect();

  if (error) {
    perform LogEffect(`Failed to purge logs: ${error}`);
    return {
      message: "Logs failed to die",
      statusCode: 500,
    };
  } else {
    perform LogEffect(`Logs were purged`);
    return {
      message: `Logs are dead.`,
      statusCode: 200,
    };
  }
};
