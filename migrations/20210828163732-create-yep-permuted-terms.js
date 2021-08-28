'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_permuted_terms', {
      task_id: Sequelize.INTEGER,
      trans_date: Sequelize.DATE,
      trans_code: Sequelize.STRING(2),
      old_ui: Sequelize.INTEGER,
      old_rec_name: Sequelize.STRING(255),
      old_term_ui: Sequelize.INTEGER,
      old_term_name: Sequelize.STRING(255),
      old_dcms_pt_ui: Sequelize.INTEGER,
      new_ui: Sequelize.INTEGER,
      new_rec_name: Sequelize.STRING(255),
      new_term_ui: Sequelize.INTEGER,
      new_term_name: Sequelize.STRING(255),
      new_heading_class: Sequelize.STRING(2),
      new_dcms_pt_ui: Sequelize.INTEGER,
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
    await queryInterface.dropTable('yep_permuted_terms');
  }
};