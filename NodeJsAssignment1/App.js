const routes = require('./routes.js');

const http = require('http');

const server = http.createServer(routes);

server.listen(3000);