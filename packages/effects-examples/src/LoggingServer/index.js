require("effects-runtime/lib/prelude-polyfill");
require("@babel/polyfill");

const { withLogHandler, LogEffect } = require("./logHandler");
const { withLogPurgeHandler } = require("./logPurgeHandler");
const { getResponseFromUri } = require("./controllers");
const http = require("http");

const handleInboundRequest = (req) => {
  perform LogEffect(`Inbound Request ${req.url}`);

  const response = getResponseFromUri(req.url);

  perform LogEffect(`Sending message : ${response.message}`);

  return response;
};

const responseSender = (res, { statusCode, message }) => {
  console.log("sending response", statusCode, message);
  res.statusCode = statusCode;
  res.write(`${message}\n`);
  res.end();
};

const entry = (req, res) => {
  "use effects";
  const result = withLogPurgeHandler(() =>
    withLogHandler(function () {
      const result = handleInboundRequest(req);
      console.log("Got a result!", result);
      responseSender(res, result);
    }, req)
  );
  console.log("result: ", result);
};

const inboundResponseHandler = (req, res) => {
  entry(req, res).catch((e) => {
    res.statusCode = 500;
    res.write(`Encountered an error: ${e.message}\n`);
    res.end();
  });
};

const app = http.createServer((req, res) => inboundResponseHandler(req, res));

app.listen(3000, "127.0.0.1");
console.log(`
Started the silly response server: ping it, and it generates silly responses!
Available routes:
/<any-path> - Generate a Silly Response
/purge-logs - Remove current logs`);
