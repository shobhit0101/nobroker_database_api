const jsonServer = require("json-server");
const data = require('./db.json');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process = process.env.PORT || 3001;
server.use(middlewares);
server.use(router);
server.listen(port);
