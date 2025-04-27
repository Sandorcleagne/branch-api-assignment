const dotenv = require("dotenv");
dotenv.config();

const _config = {
  port: process.env.PORT || 3000,
  API_ENV: process.env.API_ENV,
};

module.exports = _config;
