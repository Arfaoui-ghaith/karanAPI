'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_qual_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_qual_records.init({
    task_id: DataTypes.INTEGER,
    trans_code: DataTypes.STRING(2),
    trans_dt: DataTypes.DATE,
    old_ui: DataTypes.INTEGER,
    old_name: DataTypes.STRING(255),
    old_term_type: DataTypes.STRING(1),
    old_term_ui: DataTypes.INTEGER,
    old_qe: DataTypes.STRING(255),
    old_qa: DataTypes.STRING(2),
    new_ui: DataTypes.INTEGER,
    new_name: DataTypes.STRING(255),
    new_term_type: DataTypes.STRING(1),
    new_term_ui: DataTypes.INTEGER,
    new_qe: DataTypes.STRING(255),
    new_qa: DataTypes.STRING(2),
    term_type_changed: DataTypes.STRING(1),
    special_flag: DataTypes.STRING(1)
  }, {
    sequelize,
    modelName: 'yep_qual_records',
  });
  return yep_qual_records;
};