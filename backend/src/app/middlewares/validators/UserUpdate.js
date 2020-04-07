const { Joi } = require('celebrate');

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    oldPassword: Joi.string().min(4),
    password: Joi.string()
      .min(6)
      .when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required() : field
      ),
    confirmPassword: Joi.string().when('password', (password, field) =>
      password ? field.required().oneOf([Joi.ref('password')]) : field
    ),
  });

  try {
    await schema.validate(req.body);

    return next();
  } catch (err) {
    return res.status(400).json({ error: 'Validation fails', messages: err });
  }
};
