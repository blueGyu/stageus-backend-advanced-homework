const commonSuccessResponse = (res, status, message, results = []) => {
  res.status(status).json({ success: true, message, results });
};

const commonErrorResponse = (status, message) => {
  const error = new Error(message);
  error.status = status;

  return error;
};

module.exports = { commonSuccessResponse, commonErrorResponse };
