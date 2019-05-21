const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const zooRouter = require('../zoo/zooRouter.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/zoo', zooRouter);

module.exports = server;