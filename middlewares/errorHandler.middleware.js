const _config = require("../config/config.js");
const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: _config.API_ENV === "development" ? err.stack : {},
  });
};

module.exports = ErrorHandler;
