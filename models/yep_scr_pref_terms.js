'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_scr_pref_terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_scr_pref_terms.init({
    task_id: DataTypes.INTEGER,
    trans_code: DataTypes.STRING(2),
    trans_date: DataTypes.DATE,
    old_ui: DataTypes.INTEGER,
    old_rec_name: DataTypes.STRING(255),
    old_value: DataTypes.STRING(255),
    old_term_type: DataTypes.STRING(1),
    old_term_ui: DataTypes.INTEGER,
    old_term_name: DataTypes.STRING(255),
    new_ui: DataTypes.INTEGER,
    new_rec_name: DataTypes.STRING(255),
    new_value: DataTypes.STRING(255),
    new_term_type: DataTypes.STRING(1),
    new_term_ui: DataTypes.INTEGER,
    new_term_name: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'yep_scr_pref_terms',
  });
  return yep_scr_pref_terms;
};