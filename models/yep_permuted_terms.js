'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_permuted_terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_permuted_terms.init({
    task_id: DataTypes.INTEGER,
    trans_date: DataTypes.DATE,
    trans_code: DataTypes.STRING(2),
    old_ui: DataTypes.INTEGER,
    old_rec_name: DataTypes.STRING(255),
    old_term_ui: DataTypes.INTEGER,
    old_term_name: DataTypes.STRING(255),
    old_dcms_pt_ui: DataTypes.INTEGER,
    new_ui: DataTypes.INTEGER,
    new_rec_name: DataTypes.STRING(255),
    new_term_ui: DataTypes.INTEGER,
    new_term_name: DataTypes.STRING(255),
    new_heading_class: DataTypes.STRING(2),
    new_dcms_pt_ui: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'yep_permuted_terms',
  });
  return yep_permuted_terms;
};