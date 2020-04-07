import { Joi } from 'celebrate';

import File from '../models/File';

class SignatureService {
  async run({ name, path }) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      path: Joi.string().required(),
    });

    const { error } = await schema.validate({
      name,
      path,
    });

    if (error) {
      return ({ error })
    }

    const file = await File.create({
      name,
      path,
    });

    return file.id;

  }
}

export default new SignatureService();
