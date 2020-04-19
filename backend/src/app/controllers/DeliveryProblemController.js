import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';

import SendEmailToDeliverymanService from '../services/SendEmailToDeliverymanService';

class DeliveryProblemController {
  async index(req, res) {
    const { id } = req.params;

    /* req.query=list : returns a full list */
    const { page = 1, list } = req.query;

    if (list) {
      const problems = await DeliveryProblem.findAndCountAll(
        {
          attributes: ['id', 'delivery_id', 'description', 'created_at'],
          limit: 5,
          offset: (page - 1) * 5,
        },
        {
          where: { id },
          order: [['id', 'DESC']],
        }
      );
      res.header('X-Total-Count', problems.count);

      return res.json(problems);
    }

    /* req.query=!list : returns problems for an specific Delivery */
    const deilveryProblems = await DeliveryProblem.findAndCountAll({
      attributes: ['id', 'delivery_id', 'description', 'created_at'],
      order: [['id', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
      where: { delivery_id: id },
    });
    res.header('X-Total-Count', deilveryProblems.count);

    return res.json(deilveryProblems);
  }

  async store(req, res) {
    const { id } = req.params;

    const { description } = req.body;
    /* Check if delivery exists  */
    const delivery = await Delivery.findOne({ where: { id } });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found.' });
    }

    const problem = await DeliveryProblem.create({
      delivery_id: id,
      description,
    });

    return res.json(problem);
  }

  async delete(req, res) {
    const { id } = req.params;

    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found.' });
    }

    delivery.canceled_at = new Date();

    await delivery.save(delivery);

    const { deliveryman_id, recipient_id, product } = delivery;

    const deliverymanEmail = await SendEmailToDeliverymanService.run({
      identifier: 'cancellation',
      delivery_id: id,
      deliveryman_id,
      recipient_id,
      product,
    });

    return res.json(deliverymanEmail);
  }
}

export default new DeliveryProblemController();
