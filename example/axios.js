const axios = require('axios');
const { axiosMiddleware } = require('../index');

axios.interceptors.request.use(axiosMiddleware);

module.exports = axios;
