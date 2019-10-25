const { HEADER_NAME } = require('./constants');
const threadKeeper = require('./thread-keeper');

module.exports = (request) => {
  request.headers[HEADER_NAME] = threadKeeper.getThreadId();

  return request;
}