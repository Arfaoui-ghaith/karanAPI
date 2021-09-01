'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_ec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_ec.init({
    trans_code: DataTypes.STRING(2),
    trans_date: DataTypes.DATE,
    old_rec_ui: DataTypes.INTEGER,
    old_value: DataTypes.STRING(255),
    old_term_ui: DataTypes.INTEGER,
    old_shin: DataTypes.INTEGER,
    old_shin_value: DataTypes.STRING(255),
    old_shin_term_ui: DataTypes.INTEGER,
    old_shin_status: DataTypes.STRING(1),
    old_ec_ui: DataTypes.INTEGER,
    old_ec_value: DataTypes.STRING(255),
    old_ec_term_ui: DataTypes.INTEGER,
    old_ec_status: DataTypes.STRING(1),
    old_shout: DataTypes.INTEGER,
    old_shout_value: DataTypes.STRING(255),
    old_shout_term_ui: DataTypes.INTEGER,
    old_shout_status: DataTypes.STRING(1),
    new_rec_ui: DataTypes.INTEGER,
    new_value: DataTypes.STRING(255),
    new_term_ui: DataTypes.INTEGER,
    new_shin: DataTypes.INTEGER,
    new_shin_value: DataTypes.STRING(255),
    new_shin_term_ui: DataTypes.INTEGER,
    new_ec_ui: DataTypes.INTEGER,
    new_ec_value: DataTypes.STRING(255),
    new_ec_term_ui: DataTypes.INTEGER,
    new_shout: DataTypes.INTEGER,
    new_shout_value: DataTypes.STRING(255),
    new_shout_term_ui: DataTypes.INTEGER,
    source_id: DataTypes.STRING(10)
  }, {
    sequelize,
    modelName: 'yep_ec',
    tableName: 'yep_ec'
  });
  return yep_ec;
};