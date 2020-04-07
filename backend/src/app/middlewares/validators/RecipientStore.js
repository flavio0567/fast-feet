const { Joi } = require('celebrate');

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    rua: Joi.string().required(),
    numero: Joi.number().required(),
    estado: Joi.string().required(),
    cidade: Joi.string().required(),
    cep: Joi.string().required(),
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
