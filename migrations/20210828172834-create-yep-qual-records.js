'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_qual_records', {
      task_id: Sequelize.INTEGER,
      trans_code: Sequelize.STRING(2),
      trans_dt: Sequelize.DATE,
      old_ui: Sequelize.INTEGER,
      old_name: Sequelize.STRING(255),
      old_term_type: Sequelize.STRING(1),
      old_term_ui: Sequelize.INTEGER,
      old_qe: Sequelize.STRING(255),
      old_qa: Sequelize.STRING(2),
      new_ui: Sequelize.INTEGER,
      new_name: Sequelize.STRING(255),
      new_term_type: Sequelize.STRING(1),
      new_term_ui: Sequelize.INTEGER,
      new_qe: Sequelize.STRING(255),
      new_qa: Sequelize.STRING(2),
      term_type_changed: Sequelize.STRING(1),
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
    await queryInterface.dropTable('yep_qual_records');
  }
};