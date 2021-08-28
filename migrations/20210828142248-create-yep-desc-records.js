'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_desc_records', {
      task_id: {
        type: Sequelize.INTEGER
      },
      trans_code: {
        type: Sequelize.STRING(2)
      },
      trans_date: {
        type: Sequelize.DATE
      },
      old_ui: {
        type: Sequelize.INTEGER
      },
      old_name : {
        type: Sequelize.STRING(4000)
      },
      old_term_type : {
        type: Sequelize.STRING(1)
      },
      old_term_ui :{
          type: Sequelize.INTEGER
      },
      old_subheading : {
        type: Sequelize.STRING(4000)
      },
      old_cas_registry_number : {
        type: Sequelize.STRING(4000)
      },
      old_consider_also : {
        type: Sequelize.STRING(4000)
      },
      old_heading_class : {
        type: Sequelize.STRING(2)
      },
      old_subheadings_exist_yn : {
        type: Sequelize.STRING(1)
      },
      new_ui :{
          type: Sequelize.INTEGER
        },
      new_name : {
        type: Sequelize.STRING(4000)
      },
      new_term_type : {
        type: Sequelize.STRING(1)
      },
      new_term_ui :{
          type: Sequelize.INTEGER
        },
      new_subheading : {
        type: Sequelize.STRING(4000)
      },
      new_cas_registry_number : {
        type: Sequelize.STRING(4000)
      },
      new_consider_also : {
        type: Sequelize.STRING(4000)
      },
      new_heading_class : {
        type: Sequelize.STRING(2)
      },
      new_subheadings_exist_yn : {
        type: Sequelize.STRING(1)
      },
      special_flag : {
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
    await queryInterface.dropTable('yep_desc_records');
  }
};