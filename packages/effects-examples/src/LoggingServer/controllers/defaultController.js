const { LogEffect } = require("../logHandler");

const cannedResponses = ["Swell!", "Complete!", "Wowie!"];

module.exports.defaultController = () => {
  perform LogEffect(`Generating silly response`);
  return {
    message: cannedResponses[(Math.random() * cannedResponses.length) | 0],
    statusCode: 200,
  };
};
