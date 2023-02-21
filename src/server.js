'use strict';

const express = require('express');
const path = require('path');
const http = require('http');

const fruitsRouter = require('./routes/fruits');

const app = express();
const server = http.createServer(app);

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

app.use('/fruits', fruitsRouter);

const host = 'localhost';
const port = 8000;

server.listen(port, host, () => {
  console.info(`Server address: ${host}:${port}`);
  console.info('Server running...');
});
