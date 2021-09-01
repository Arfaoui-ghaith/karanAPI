'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_hm_sweep', {
      task_id: {
        type: Sequelize.INTEGER,
        allowNull: {
          args: false
        }
      },
      chem_ui: {
        type: Sequelize.INTEGER,
        allowNull: {
          args: false
        }
      },
      chem_id: {
        type: Sequelize.INTEGER,
        allowNull: {
          args: false
        }
      },
      desc_ui: {
        type: Sequelize.INTEGER,
        allowNull: {
          args: false
        }
      },
      mesh_id: {
        type: Sequelize.INTEGER,
        allowNull: {
          args: false
        }
      },
      qual_ui: Sequelize.INTEGER,
      meshsh_id: Sequelize.INTEGER,
      scr_origin: Sequelize.STRING(5),
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
    await queryInterface.dropTable('yep_hm_sweep');
  }
};