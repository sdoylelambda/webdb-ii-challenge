const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const zoosRouter = require('../zoo/zooRouter.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/zoos', zoosRouter);

module.exports = server;