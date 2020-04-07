const { Joi } = require('celebrate');

module.exports = async (req, res, next) => {
  const { delivered } = req.query;

  if (!delivered) {
    const schema = Joi.object().keys({
      name: Joi.string(),
      email: Joi.string(),
      avatar_id: Joi.number(),
    })


    const { error } = await schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: 'Validation fails',
        messages: error.details,
      });
    }

    return next();
  }

};
