require('../../../lib/prelude-polyfill');

const {
  withLogHandler,
  LogEffect
} = require('./logHandler');

const {
  LogPurgeEffect,
  withLogPurgeHandler
} = require('./logPurgeHandler');

const http = require('http');

const cannedResponses = ['Swell!', "Complete!", "Wowie!"];

const purgeLogController = function* () {
  const error = yield performEffect((LogPurgeEffect()));

  if (error) {
    yield performEffect((LogEffect(`Failed to purge logs: ${error}`)));
    return {
      message: 'Logs failed to die',
      statusCode: 500
    };
  } else {
    yield performEffect((LogEffect(`Logs were purged`)));
    return {
      message: `Logs are dead.`,
      statusCode: 200
    };
  }
};

const defaultController = function* () {
  yield performEffect((LogEffect(`Generating silly response`)));
  return {
    message: cannedResponses[(Math.random()) * cannedResponses.length | 0],
    statusCode: 200
  };
};

const getResponseFromUri = function* (url) {
  yield performEffect((LogEffect(`Getting response from uri`)));

  switch (url) {
    case '/purge-logs':
      return yield purgeLogController();

    default:
      return yield defaultController();
  }
};

const handleInboundRequest = function* (res) {
  yield performEffect((yield LogEffect(`Inbound Request ${res.url}`)));
  const response = yield getResponseFromUri(res.url);
  yield performEffect((yield LogEffect(`Sending message : ${response.message}`)));
  return response;
};

const inboundResponseHandler = (req, res) => {
  try {
    runProgram(
      withLogHandler(function* () {
        const {
          statusCode,
          message
        } = yield handleInboundRequest(req);
        res.statusCode = statusCode;
        yield res.write(`${message}\n`);
        yield res.end();
      }, req))
  } catch (e) {
    console.log('Error');
  } // try{
  // withLogPurgeHandler(
  // )
  // }handle(e){}
  // catch(e){
  //     console.log('An error happened');
  // }

};

const app = http.createServer((req, res) => inboundResponseHandler(req, res));
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');