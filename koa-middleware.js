const uuid = require('uuid/v4');
const { clsProxifyKoaMiddleware } = require('cls-proxify/integration/koa');
const { HEADER_NAME, NAMESPACE } = require('./constants');

module.exports = clsProxifyKoaMiddleware(NAMESPACE, (ctx) => {
  const threadId = ctx.header[HEADER_NAME] || uuid();
  const threadKeeperProxy = {
    getThreadId: () => threadId,
  };

  return threadKeeperProxy;
});
