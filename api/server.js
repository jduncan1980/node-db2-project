const express = require('express');
const logger = require('../middleware/logger');
const error = require('../middleware/error');
const server = express();
const carRouter = require('../routes/carRoutes');
const helmet = require('helmet');

server.use(helmet());
server.use(logger());
server.use(express.json());

server.use('/api/cars', carRouter);
server.use('/', (req, res) => {
	res.send('API RUNNING');
});

server.use(error());

module.exports = server;
