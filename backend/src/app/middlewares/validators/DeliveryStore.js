const { Joi } = require('celebrate');

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    deliveryman_id: Joi.number().required(),
    recipient_id: Joi.number().required(),
    product: Joi.string().required(),
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
