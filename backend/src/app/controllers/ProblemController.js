import DeliveryProblem from '../models/DeliveryProblem';

class ProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;

    /* Returns all deliveries with at least one problems */
    const deilveryProblems = await DeliveryProblem.findAndCountAll({
      attributes: ['id', 'delivery_id', 'description', 'created_at'],
      order: [['id', 'ASC']],
      limit: 5,
      offset: (page - 1) * 5,
    });
    res.header('X-Total-Count', deilveryProblems.count);

    return res.json(deilveryProblems.rows);
  }
}
export default new ProblemController();
