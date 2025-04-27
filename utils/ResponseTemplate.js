const errorResponse = (message = "Something went wrong", statusCode = 500) => {
  const error = new Error(message);
  return {
    status: false,
    statusCode: statusCode,
    message: error.message,
    data: null,
  };
};

const successResponse = (
  message = "Success",
  data = null,
  statusCode = 200
) => {
  return {
    status: true,
    statusCode: statusCode,
    message: message,
    data: data,
  };
};
module.exports = {
  errorResponse,
  successResponse,
};
