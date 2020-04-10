import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const { id } = req.query;
      const users = await User.findOne({ where: { id } });

      return res.json(users);
    } catch (err) {
      return res.status(401).json(err);
    }
  }

  async store(req, res) {
    /**
     * Check if this user already exist
     */
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already in use.' });
    }

    /**
     * Check if user is a recipient
     */
    if (req.body.recipient && req.body.password) {
      return res
        .status(400)
        .json({ error: "User is a recipient, he can't has a password." });
    }

    try {
      const { id, name, email, recipient } = await User.create(req.body);

      return res.json({ id, name, email, recipient });
    } catch (err) {
      return res.status(401).json(err);
    }
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res
          .status(400)
          .json({ error: 'User already in use with no changes.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Password does not match.' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
