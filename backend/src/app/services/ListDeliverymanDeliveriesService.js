import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import User from '../models/User';

class ListDeliverymanDeliveriesService {
  async run({ deliveryman_id, page = 1 }) {
    const deliveries = await Delivery.findAndCountAll({
      attributes: ['id', 'product', 'start_date', 'end_date', 'recipient_id'],
      where: {
        deliveryman_id,
        canceled_at: null,
        end_date: null,
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

export default new ListDeliverymanDeliveriesService();
