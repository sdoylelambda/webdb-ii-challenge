const express = require('express');
const helmet = require('helmet');

const zoosRouter = require('../zoo/zooRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/zoos', zoosRouter);

module.exports = server;