'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cur_desc_fx', {
      task_id: {
        type: Sequelize.INTEGER
      },
      trans_code: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      trans_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      old_ui: {
        type: Sequelize.INTEGER
      },
      new_ui: {
        type: Sequelize.INTEGER
      },
      old_fx_ui: {
        type: Sequelize.INTEGER
      },
      new_fx_ui: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cur_desc_fx');
  }
};