module.exports = (req, res, next) => {
  console.log(`Method: ${req.method}; URL: ${req.url}`);

  return next();
};
