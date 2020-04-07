import Mail from '../../lib/Mail';

class DeliveryCancelationMail {
  get key() {
    return 'DeliveryCancellationMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, address, delivery_id, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Encomenda CANCELADA!',
      template: 'cancellation',
      context: {
        deliveryman: deliveryman.name,
        recipient: recipient.name,
        delivery_id,
        product,
        address,
      },
    });
  }
}

export default new DeliveryCancelationMail();
