require('../../../lib/prelude-polyfill');
const {withLogHandler, LogEffect} = require('./logHandler');

const http = require('http');

const cannedResponses = ['Swell!', "Complete!", "Wowie!"];

const handleInboundRequest = () => {
    perform LogEffect('Inbound Request');

    const response = {
        response : cannedResponses[(Math.random() * cannedResponses.length)+1 | 0],
        statusCode : 200
    };

    perform LogEffect(`Sending response : ${response.response}`);

    return response;
};




// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
    withLogHandler(() => {
        const {statusCode, response} = handleInboundRequest();

        res.statusCode = statusCode;
        res.write(`${response}\n`);
        res.end();
    }, req)
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
