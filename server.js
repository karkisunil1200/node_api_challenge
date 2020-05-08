const express = require('express');
const projectRouter = require('./router/project');
const actionRouter = require('./router/action');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({server: 'up'});
});

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;
