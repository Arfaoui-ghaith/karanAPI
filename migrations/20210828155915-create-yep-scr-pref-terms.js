'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_scr_pref_terms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_id: Sequelize.INTEGER,
      trans_code: Sequelize.STRING(2),
      trans_date: Sequelize.DATE,
      old_ui: Sequelize.INTEGER,
      old_rec_name: Sequelize.STRING(255),
      old_value: Sequelize.STRING(255),
      old_term_type: Sequelize.STRING(1),
      old_term_ui: Sequelize.INTEGER,
      old_term_name: Sequelize.STRING(255),
      new_ui: Sequelize.INTEGER,
      new_rec_name: Sequelize.STRING(255),
      new_value: Sequelize.STRING(255),
      new_term_type: Sequelize.STRING(1),
      new_term_ui: Sequelize.INTEGER,
      new_term_name: Sequelize.STRING(255),
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
    await queryInterface.dropTable('yep_scr_pref_terms');
  }
};