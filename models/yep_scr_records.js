'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_scr_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_scr_records.init({
    task_id: DataTypes.INTEGER,
    trans_code: DataTypes.STRING(2),
    trans_date: DataTypes.DATE,
    old_ui: DataTypes.INTEGER,
    old_name: DataTypes.STRING(255),
    old_term_type: DataTypes.STRING(1),
    old_term_ui: DataTypes.INTEGER,
    old_cas_registry_number: DataTypes.STRING(255),
    new_ui: DataTypes.INTEGER,
    new_name: DataTypes.STRING(255),
    new_term_type: DataTypes.STRING(1),
    new_term_ui: DataTypes.INTEGER,
    new_cas_registry_number: DataTypes.STRING(255),
    new_heading_class: DataTypes.STRING(2),
    special_flag: DataTypes.STRING(1)
  }, {
    sequelize,
    modelName: 'yep_scr_records',
  });
  return yep_scr_records;
};