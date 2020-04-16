import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import User from '../models/User';

class ListDeliverymanDelivered {
  async run({ deliveryman_id, page = 1 }) {
    const deliveries = await Delivery.findAndCountAll({
      attributes: ['id', 'product', 'start_date', 'end_date'],
      where: {
        deliveryman_id,
        canceled_at: null,
        end_date: {
          [Op.ne]: null,
        },
      },
      limit: 5,
      offset: (page - 1) * 5,
      include: [
        {
          model: User,
          as: 'recipient',
          include: [
            {
              model: Recipient,
              as: 'user',
            },
          ],
        },
      ],
    });

    return deliveries;
  }
}

export default new ListDeliverymanDelivered();
