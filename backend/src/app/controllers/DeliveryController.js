import { Op } from 'sequelize';

import Delivery from '../models/Delivery';

import SendEmailToDeliverymanService from '../services/SendEmailToDeliverymanService';

class DeliveryController {
  async index(req, res) {
    const { q } = req.query;

    if (q) {
      const deliveryProducts = await Delivery.findAll({
        where: {
          product: {
            [Op.iLike]: `%${q}%`,
          }
        },
      });

      return res.json(deliveryProducts);
    }

    const deliveries = await Delivery.findAll();

    return res.json(deliveries);
  }

  async store(req, res) {
    const { deliveryman_id, recipient_id, product } = req.body;

    const { id } = await Delivery.create(req.body);

    const deliverymanEmail = await SendEmailToDeliverymanService.run({
      delivery_id: id,
      deliveryman_id,
      recipient_id,
      product,
    });

    return res.json(deliverymanEmail);
  }

  async update(req, res) {
    const { id } = req.params;

    const delivery = await Delivery.update(req.body,
      { where: { id }}
    );

    return res.json(delivery);
  }

  async delete(req, res) {
    return res.json({ mess: 'delete ok!' });
  }
}

export default new DeliveryController();
