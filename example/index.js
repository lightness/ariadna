const Koa = require('koa');
const { koaMiddleware: ariadnaMiddleware } = require('../index');
const router = require('./router');

const app = new Koa();
app.use(ariadnaMiddleware);
app.use(router.routes());

const port = process.env.PORT || '9999';

app.listen(port, () => {
  console.log(`Service listening on ${port} port ...`);
  console.log(`Visit http://localhost:${port}/api/v1 - simplest example`);
  console.log(`Visit http://localhost:${port}/api/v1/axios - outgoing request with help of axios. Please take a look on response headers`);
});
