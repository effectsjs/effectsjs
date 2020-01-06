require('../../../lib/prelude-polyfill');
const {withLogHandler, LogEffect} = require('./logHandler');
const {LogPurgeEffect, withLogPurgeHandler } = require('./logPurgeHandler');

const http = require('http');

const cannedResponses = ['Swell!', "Complete!", "Wowie!"];

const purgeLogController = () => {
    const error = perform LogPurgeEffect();
    if(error){
        perform LogEffect(`Failed to purge logs: ${error}`);
        return {
            message : 'Logs failed to die',
            statusCode: 500
        }
    }else{
        perform LogEffect(`Logs were purged`);
        return {
            message : `Logs are dead.`,
            statusCode : 200
        }
    }
};

const defaultController = () => {
    perform LogEffect(`Generating silly response`);
    return {
        message : cannedResponses[(Math.random() * cannedResponses.length)| 0],
        statusCode : 200
    };
};

const getResponseFromUri = (url) => {
    perform LogEffect(`Getting response from uri`);
    switch(url){
        case '/purge-logs': return purgeLogController();
        default : return defaultController();
    }
};

const handleInboundRequest = (res) => {
    perform LogEffect(`Inbound Request ${res.url}`);

    const response = getResponseFromUri(res.url);

    perform LogEffect(`Sending message : ${response.message}`);

    return response;
};

const inboundResponseHandler = (req, res) => {
    try{
    'use effects';
        withLogHandler(
            () => {
                const {statusCode, message} = handleInboundRequest(req);

                res.statusCode = statusCode;
                res.write(`${ message}\n`);
                res.end();
            },
            req
        )
    }catch(e){
        console.log('Error');
        res.statusCode = 500;
        res.write(`Encountered an error`)
        res.end();
    }
        // try{
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