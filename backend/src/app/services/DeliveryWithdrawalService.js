import { Op } from 'sequelize';
const { Joi } = require('celebrate');

import { startOfDay, endOfDay, format, startOfHour } from 'date-fns';

import Delivery from '../models/Delivery';

class DeliveryWithDrawalService {
  async run({ deliveryman_id, start_date, delivery_id }) {
    const schema = Joi.object().keys({
      deliveryman_id: Joi.number().required(),
      delivery_id: Joi.number().required(),
      start_date: Joi.date().required(),
    });

    const { error } = await schema.validate({ deliveryman_id, start_date, delivery_id });

    if (error) {
      return ({ error })
    }
    /* O entregador só pode fazer 5 retiradas por dia */
    const today = new Date();

    const dateStart = startOfDay(today);
    const data1 = format(dateStart, 'yyyy-MM-dd HH:mm:ss.SSS +00:00');
    const dateEnd = endOfDay(today);
    const data2 = format(dateEnd, 'yyyy-MM-dd HH:mm:ss.SSS +00:00');

    const deliveries = await Delivery.count({
      where: {
        deliveryman_id,
        start_date: {
          [Op.between]: [data1, data2],
        },
      },
    });

    if (deliveries > 5) {
      error = {
        deliveries,
        error: 'Exceed number of deliveries in one day',
      };
      return error;
    }

    /* as retiradas só podem ser feitas entre as 08:00 e 18:00h. */
    const hourNow = startOfHour(new Date());

    let hr = '';

    if (hourNow.getHours() > 10) {
      hr = hourNow.getHours();
    } else {
      hr = `0${hourNow.getHours()}`;
    }

    if (Number(hr) < 8 && Number(hr) > 18) {
      error = {
        deliveries,
        error: 'Withdrawn only allowed between 08:00 and 18:00.',
      };
      return error;
    }

    const delivery = await Delivery.update(
      {start_date},
      {where: {id: delivery_id}}
    );

    return delivery;
  }
}

export default new DeliveryWithDrawalService();
