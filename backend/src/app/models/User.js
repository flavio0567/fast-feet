import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        recipient: Sequelize.BOOLEAN,
        deliveryman: Sequelize.BOOLEAN,
        avatar_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { forenignKey: 'avatar_id', as: 'avatar' });
  }

  static associate(models) {
    this.hasOne(models.Recipient, { forenignKey: 'id', as: 'user' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
