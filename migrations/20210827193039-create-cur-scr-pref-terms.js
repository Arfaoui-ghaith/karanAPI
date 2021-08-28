'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cur_scr_pref_terms', {
      task_id: {
        type: Sequelize.INTEGER
      },
      trans_code: {
        type: Sequelize.STRING(2)
      },
      trans_date: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.STRING(50)
      },
      old_ui: {
        type: Sequelize.INTEGER
      },
      old_rec_name: {
        type: Sequelize.STRING(4000)
      },
      old_value: {
        type: Sequelize.STRING(4000)
      },
      old_term_ui: {
        type: Sequelize.INTEGER
      },
      old_term_type: {
        type: Sequelize.STRING(1)
      },
      new_ui: {
        type: Sequelize.INTEGER
      },
      new_rec_name: {
        type: Sequelize.STRING(4000)
      },
      new_value: {
        type: Sequelize.STRING(4000)
      },
      new_term_ui: {
        type: Sequelize.INTEGER
      },
      new_term_type: {
        type: Sequelize.STRING(1)
      },
      processing_flag: {
        type: Sequelize.STRING(1)
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
    await queryInterface.dropTable('cur_scr_pref_terms');
  }
};