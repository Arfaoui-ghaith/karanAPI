'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_scr_records', {
      task_id: Sequelize.INTEGER,
      trans_code: Sequelize.STRING(2),
      trans_date: Sequelize.DATE,
      old_ui: Sequelize.INTEGER,
      old_name: Sequelize.STRING(255),
      old_term_type: Sequelize.STRING(1),
      old_term_ui: Sequelize.INTEGER,
      old_cas_registry_number: Sequelize.STRING(255),
      new_ui: Sequelize.INTEGER,
      new_name: Sequelize.STRING(255),
      new_term_type: Sequelize.STRING(1),
      new_term_ui: Sequelize.INTEGER,
      new_cas_registry_number: Sequelize.STRING(255),
      new_heading_class: Sequelize.STRING(2),
      special_flag: Sequelize.STRING(1),
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
    await queryInterface.dropTable('yep_scr_records');
  }
};