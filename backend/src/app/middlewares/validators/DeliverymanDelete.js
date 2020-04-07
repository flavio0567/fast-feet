const { Joi } = require('celebrate');

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
  });

  const { error } = await schema.validate(req.params);

  if (error) {
    return res.status(400).json({
      error: 'Validation fails',
      messages: error.details,
    });
  }

  return next();
};
