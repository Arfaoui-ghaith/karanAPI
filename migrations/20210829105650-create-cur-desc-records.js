'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cur_desc_records', {
      task_id: Sequelize.INTEGER,
      trans_code: Sequelize.STRING(2),
      trans_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      old_ui: Sequelize.INTEGER,
      old_name: Sequelize.STRING(4000),
      old_term_type: Sequelize.STRING(1),
      old_term_ui: Sequelize.INTEGER,
      old_subheading: Sequelize.STRING(255),
      old_cas_registry_number: Sequelize.STRING(255),
      old_consider_also: Sequelize.STRING(255),
      old_heading_class: Sequelize.STRING(2),
      old_subheadings_exist_yn: Sequelize.STRING(1),
      new_ui: Sequelize.INTEGER,
      new_name: Sequelize.STRING(4000),
      new_term_type: Sequelize.STRING(1),
      new_term_ui: Sequelize.INTEGER,
      new_subheading: Sequelize.STRING(255),
      new_cas_registry_number: Sequelize.STRING(255),
      new_consider_also: Sequelize.STRING(100),
      new_heading_class: Sequelize.STRING(2),
      new_subheadings_exist_yn: Sequelize.STRING(1),
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
    await queryInterface.dropTable('cur_desc_records');
  }
};