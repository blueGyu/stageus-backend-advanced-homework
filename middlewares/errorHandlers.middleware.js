const errorHandler = (err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500).json({ success: false, message, results: [] });
};

module.exports = errorHandler;
