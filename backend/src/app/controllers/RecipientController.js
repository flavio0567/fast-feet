import { Op } from 'sequelize';

import Recipient from '../models/Recipient';
import User from '../models/User';

class RecipientController {
  async index(req, res) {
    console.log('RecipientController.index');

    const { q, page = 1 } = req.query;

    if (q) {
      const recipientsByName = await User.findAll({
        attributes: ['name'],
        where: {
          name: {
            [Op.iLike]: `%${q}%`,
          },
          recipient: true,
        },
        include: [
          {
            model: Recipient,
            as: 'user',
            attributes: [
              'id',
              'rua',
              'numero',
              'complemento',
              'cidade',
              'estado',
              'cep',
              'user_id',
            ],
          },
        ],
        limit: 5,
        offset: (page - 1) * 5,
      });



      return res.json(recipientsByName);
    }

    const recipients = await Recipient.findAll({
      attributes: [
        'id',
        'rua',
        'numero',
        'complemento',
        'cidade',
        'estado',
        'cep',
        'user_id',
      ],
      include: [
        {
          model: User,
          as: 'recipient',
          attributes: ['name'],
        },
      ],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(recipients);
  }

  async store(req, res) {
    console.log('RecipientController.store');

    const { name, rua, numero, complemento, estado, cidade, cep } = req.body;

    const recipientExists = await User.findOne({ where: { name } });

    if (recipientExists) {
      return res.status(400).json({ error: 'Recipient already registered.' });
    }

    try {
      req.body.recipient = true;

      const { id } = await User.create(req.body);

      const newRecipient = await Recipient.create({
        user_id: id,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
      });

      return res.json(newRecipient);
    } catch (err) {
      return res.status(401).json(err);
    }
  }
}

export default new RecipientController();
