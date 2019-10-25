const Router = require('koa-router');
const { threadKeeper } = require('../index');
const axios = require('./axios');

const router = new Router({ prefix: '/api/v1' });

router.get('/', (ctx) => {
  ctx.body = 'Hello ' + threadKeeper.getThreadId();
});

router.get('/axios', async (ctx) => {
  const response = await axios({
    url: 'https://postman-echo.com/get',
    method: 'get'
  });

  ctx.body = response.data;
});

module.exports = router;
