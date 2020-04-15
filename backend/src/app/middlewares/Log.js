module.exports = (req, res, next) => {
  console.log(`
  Method: ${req.method};
  URL: ${req.url};
  PARAMS: ${req.params.id};
  PARAMS: ${req.params.page};
  query: ${req.query};
  `);

  return next();
};
