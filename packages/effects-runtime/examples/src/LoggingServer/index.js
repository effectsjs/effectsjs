require('../../../lib/prelude-polyfill');
const {withLogHandler, LogEffect} = require('./logHandler');
const {withLogPurgeHandler } = require('./logPurgeHandler');
const {getResponseFromUri} = require('./controllers');
const http = require('http');




const handleInboundRequest = (req) => {
    perform LogEffect(`Inbound Request ${req.url}`);

    const response = getResponseFromUri(req.url);

    perform LogEffect(`Sending message : ${response.message}`);

    return response;
};

const sendResponse = (res) => ({statusCode, message}) => {
    res.statusCode = statusCode;
    res.write(`${message}\n`);
    res.end();
};


const entry = (req, res) => {
    "use effects";
    return withLogPurgeHandler(
        () => withLogHandler(
            () => sendResponse(res)(handleInboundRequest(req)),
                req
            )
    )
};

const inboundResponseHandler = (req, res) => {
    entry(req, res).catch(e => {
        res.statusCode = 500;
        res.write(`Encountered an error: ${e.message}\n`)
        res.end();
    });
};


const app = http.createServer((req, res) => inboundResponseHandler(req, res));

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');