'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_desc_terms', {
      task_id: Sequelize.INTEGER,
      trans_code: Sequelize.STRING(2),
      trans_date: Sequelize.DATE,
      old_ui: Sequelize.INTEGER,
      old_rec_name: Sequelize.STRING(255),
      old_term_type: Sequelize.STRING(1),
      old_term_ui: Sequelize.INTEGER,
      old_term_name: Sequelize.STRING(255),
      old_prtflag: Sequelize.STRING(1),
      old_ev: Sequelize.STRING(255),
      new_ui: Sequelize.INTEGER,
      new_rec_name: Sequelize.STRING(255),
      new_term_type: Sequelize.STRING(1),
      new_term_ui: Sequelize.INTEGER,
      new_term_name: Sequelize.STRING(255),
      new_prtflag: Sequelize.STRING(1),
      new_ev: Sequelize.STRING(255),
      new_heading_class: Sequelize.STRING(2),
      replace_flag_yn: Sequelize.STRING(1),
      replace_ui: Sequelize.INTEGER,
      replace_term_ui: Sequelize.INTEGER,
      replace_term_name: Sequelize.STRING(255),
      dcms_pt_ui: Sequelize.INTEGER,
      change_type: Sequelize.STRING(255),
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
    await queryInterface.dropTable('yep_desc_terms');
  }
};