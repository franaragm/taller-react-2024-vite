/**
 * This file creates an API server based on json-server module
 * to simulate XHR call request
 * It is able to serve dynamic json responses and statics files as well
 */
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({
  static: 'api/public'
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// api mock routes
require('./routes/docs.routes.cjs')(server);
require('./routes/costumers.routes.cjs')(server);

// don't move this serve.use(router) before server.<verbs>()
// db.json endpoints
// http://localhost:5000/api/v1/users/1
// http://localhost:5000/api/v1/posts/1
server.use('/api/v1', router);

server.listen(5000, function () {
  console.log('\x1b[36m%s\x1b[0m', 'JSON Server is running on port 5000...')
})
