const inboundResponseHandler = (req, res) => {
  "use effects";
  withLogPurgeHandler(
    withLogHandler(() => {
      const { statusCode, message } = handleInboundRequest(req);

      res.statusCode = statusCode;
      res.write(`${message}\n`);
      res.end();
    }, req)
  );
};
