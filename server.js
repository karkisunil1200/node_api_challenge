const express = require('express');
const projectRouter = require('./router/project');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({server: 'up'});
});

server.use('/api/projects', projectRouter);

module.exports = server;
