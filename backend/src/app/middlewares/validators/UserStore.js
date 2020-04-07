const { Joi } = require('celebrate');

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().min(4),
  });

  try {
    await schema.validate(req.body);

    return next();
  } catch (err) {
    return res.status(400).json({ error: 'Validation fails', messages: err });
  }
};
