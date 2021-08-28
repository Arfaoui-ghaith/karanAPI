'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cur_hm_records', {
      task_id: {
        type: Sequelize.INTEGER
      },
      trans_code: {
        type: Sequelize.STRING(2)
      },
      trans_date: {
        type: Sequelize.DATE
      },
      scr_ui: {
        type: Sequelize.INTEGER
      },
      scr_name: {
        type: Sequelize.STRING(4000)
      },
      hm_ui: {
        type: Sequelize.INTEGER
      },
      heading_mapped_to_name: {
        type: Sequelize.STRING(4000)
      },
      hm_sh_ui: {
        type: Sequelize.INTEGER,
      },
      heading_mapped_to_sh_name: {
        type: Sequelize.STRING(4000)
      },
      defective_yn: {
        type: Sequelize.STRING(1)
      },
      hmui_central_point_flag: {
        type: Sequelize.STRING(1)
      },
      hmsh_central_point_flag: {
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
    await queryInterface.dropTable('cur_hm_records');
  }
};