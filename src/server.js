'use strict';

const express = require('express');
const path = require('path');
const http = require('http');

const fruitsRouter = require('./routes/fruits');

const app = express();
const server = http.createServer(app);

app.use('/fruits', fruitsRouter);

const host = '0.0.0.0';
const port = 3000;

server.listen(port, host, () => {
  console.info(`Server address: ${host}:${port}`);
  console.info('Server running...');
});
