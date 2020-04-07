module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'deliveryman', {
      type: Sequelize.BOOLEAN,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
      defaultValue: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'deliveryman');
  },
};
