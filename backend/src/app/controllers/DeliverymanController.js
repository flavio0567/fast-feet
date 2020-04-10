import { Op } from 'sequelize';

import User from '../models/User';

import ListDeliverymanDeliveriesService from '../services/ListDeliverymanDeliveriesService';
import ListDeliverymanDeliveredService from '../services/ListDeliverymanDeliveredService';
import DeliveryWithDrawalService from '../services/DeliveryWithdrawalService';
import DeliveryCloseService from '../services/DeliveryCloseService';

class DeliverymanController {
  async index(req, res) {
    const { id } = req.params;
    const { page = 1 } = req.headers;
    const { delivered, q } = req.query;

    let deliveries;

    let deliveryman;
    /*  retornar as encomendas atribuidas ao Deliveryman, que não estejam
     *  entregues ou canceladas;  delivered = true */
    if (delivered) {
      if (delivered === 'true') {
        deliveries = await ListDeliverymanDeliveredService.run({
          deliveryman_id: id,
          page,
        });
      } else {
        /* retornar encomendas já entregues pelo Deliveryman; delivered=false */
        deliveries = await ListDeliverymanDeliveriesService.run({
          deliveryman_id: id,
          page,
        });
      }

      return res.json(deliveries);
    }
    /*
     *  retornar lista de Deliveryman por nome
     */
    if (q) {
      deliveryman = await User.findAll({
        where: {
          name: {
            [Op.iLike]: `%${q}%`,
          },
          deliveryman: true,
        },
      });

      return res.json(deliveryman);
    }
    /*
     *  retornar um Deliveryman específico
     */
    deliveryman = await User.findAll({
      where: {
        deliveryman: true,
        id,
      },
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(deliveryman);
  }

  async store(req, res) {
    const { name, email, avatar_id } = req.body;

    const deliveymanExist = await User.findOne({
      where: { name, deliveryman: true },
    });

    if (deliveymanExist) {
      return res.status(400).json('Deliveryman already exists.');
    }

    const deliveryman = true;

    const newDeliveryman = await User.create({
      name,
      email,
      avatar_id,
      deliveryman,
    });

    return res.json(newDeliveryman);
  }

  async update(req, res) {
    const { id } = req.params;
    /* action: 1) retirada 2) finalizar 3) aterar dados do entregador */
    const { action } = req.query;

    const { start_date, end_date, delivery_id, file_id } = req.body;

    switch (Number(action)) {
      case 1:
        /*  Retirada de entrega: incluir data de retirada (start_date) */
        const withdrawalDelivery = await DeliveryWithDrawalService.run({
          deliveryman_id: id,
          start_date,
          end_date,
          delivery_id
        });

        if (withdrawalDelivery.error) {
          return res.status(400).json(withdrawalDelivery);
        }

        break;
      case 2:
        /* Finalizar entrega: incluir data de entrega (end_date) */
        const closeDelivery = await DeliveryCloseService.run({
          deliveryman_id: id,
          end_date,
          delivery_id,
          file_id,
        });

        if (closeDelivery.error) {
          return res.status(400).json(closeDelivery);
        }

        break;
      default:
        /* alterar dados do entregador */
        const { email } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
          return res.status(400).json({ error: 'User not found.' });
        }

        await User.update(req.body, { where: { id: user.id } });
    }
    return res.status(200).json();
  }

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).json({
        error: 'Deliveryman not found, try again',
      });
    }

    const numAffectedRows = await User.destroy({ where: { id } });

    return res.json(numAffectedRows);
  }
}

export default new DeliverymanController();
