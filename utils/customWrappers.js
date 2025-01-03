const tryCatchWrapper = (func) => (req, res, next) => {
  try {
    func(req, res);
  } catch (err) {
    next(err);
  }
};

module.exports = tryCatchWrapper;
