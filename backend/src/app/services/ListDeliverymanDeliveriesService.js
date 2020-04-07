import Delivery from '../models/Delivery';

class ListDeliverymanDeliveriesService {
  async run({ deliveryman_id, page = 1 }) {
    const deliveries = await Delivery.findAll({
      attributes: ['id', 'product'],
      where: {
        deliveryman_id,
        canceled_at: null,
        end_date: null,
      },
      limit: 20,
      offset: (page - 1) * 20,
    });

    return deliveries;
  }
}

export default new ListDeliverymanDeliveriesService();
