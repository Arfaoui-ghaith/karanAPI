'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aq_descriptors', {
      mesh_year: {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      desc_ui: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qual_ui: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      aq: {
        type: Sequelize.STRING(2),
        allowNull: false,
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
    await queryInterface.dropTable('aq_descriptors');
  }
};