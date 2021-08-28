'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yep_ec', {
      trans_code: Sequelize.STRING(2),
      trans_date: Sequelize.DATE,
      old_rec_ui: Sequelize.INTEGER,
      old_value: Sequelize.STRING(255),
      old_term_ui: Sequelize.INTEGER,
      old_shin: Sequelize.INTEGER,
      old_shin_value: Sequelize.STRING(255),
      old_shin_term_ui: Sequelize.INTEGER,
      old_shin_status: Sequelize.STRING(1),
      old_ec_ui: Sequelize.INTEGER,
      old_ec_value: Sequelize.STRING(255),
      old_ec_term_ui: Sequelize.INTEGER,
      old_ec_status: Sequelize.STRING(1),
      old_shout: Sequelize.INTEGER,
      old_shout_value: Sequelize.STRING(255),
      old_shout_term_ui: Sequelize.INTEGER,
      old_shout_status: Sequelize.STRING(1),
      new_rec_ui: Sequelize.INTEGER,
      new_value: Sequelize.STRING(255),
      new_term_ui: Sequelize.INTEGER,
      new_shin: Sequelize.INTEGER,
      new_shin_value: Sequelize.STRING(255),
      new_shin_term_ui: Sequelize.INTEGER,
      new_ec_ui: Sequelize.INTEGER,
      new_ec_value: Sequelize.STRING(255),
      new_ec_term_ui: Sequelize.INTEGER,
      new_shout: Sequelize.INTEGER,
      new_shout_value: Sequelize.STRING(255),
      new_shout_term_ui: Sequelize.INTEGER,
      source_id: Sequelize.STRING(10),
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
    await queryInterface.dropTable('yep_ec');
  }
};