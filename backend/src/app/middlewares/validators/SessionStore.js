const { Joi } = require('celebrate');

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
  });

  const { error } = await schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: 'Validation fails',
      messages: error.details,
    });
  }
  return next();
};
