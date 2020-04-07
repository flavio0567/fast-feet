import { Op } from 'sequelize';
import { Joi } from 'celebrate';

import Delivery from '../models/Delivery';
import File from '../models/File';

class DeliverCloseService {
  async run({ deliveryman_id, end_date, delivery_id, file_id }) {
    const schema = Joi.object().keys({
      deliveryman_id: Joi.number().required(),
      delivery_id: Joi.number().required(),
      end_date: Joi.date().required(),
      file_id: Joi.number().required(),
    });

    const { error } = await schema.validate({
      deliveryman_id,
      end_date,
      delivery_id,
      file_id,
    });

    if (error) {
      return ({ error })
    }

    /* Antes de finalizar checar se a encomenda foi retirada */
    const delivery = await Delivery.findOne({
      where: {
        id: delivery_id,
        deliveryman_id,
        start_date: {
          [Op.ne]: null,
        },
      },
    });

    if (!delivery) {
      const fail = {
        delivery,
        error: 'You need to withdrawal this delivery before close it.',
      };
      return fail;
    }

    /* Finalizar encomenda atribuindo end_date e file_id (assinatura) */
    await Delivery.update(
      {
        signature_id: file_id,
        end_date
      },
      { where: { delivery_id } });

    return file;
  }
}

export default new DeliverCloseService();
