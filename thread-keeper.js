const { clsProxify } = require('cls-proxify');
const { NAMESPACE } = require('./constants');

const threadKeeper = {
  getThreadId: () => 'none',
};

module.exports = clsProxify(NAMESPACE, threadKeeper);
