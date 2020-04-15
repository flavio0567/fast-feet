import User from '../models/User';
import Recipient from '../models/Recipient';

import DeliveryMail from '../jobs/DeliveryMail';
import DeliveryCancellationMail from '../jobs/DeliveryCancellationMail';

import Queue from '../../lib/Queue';

class SendEmailToDeliveryman {
  async run({
    deliveryman_id,
    recipient_id,
    delivery_id,
    product,
    identifier,
  }) {
    const deliveryman = await User.findByPk(deliveryman_id);

    const recipient = await User.findByPk(recipient_id);

    const address = await Recipient.findOne({
      where: { user_id: recipient_id },
    });

    if (identifier) {
      await Queue.add(DeliveryCancellationMail.key, {
        deliveryman,
        recipient,
        address,
        delivery_id,
        product,
      });
    } else {
      await Queue.add(DeliveryMail.key, {
        deliveryman,
        recipient,
        address,
        delivery_id,
        product,
      });
    }
  }
}

export default new SendEmailToDeliveryman();
