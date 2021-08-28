'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_scr_terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_scr_terms.init({
    task_id: DataTypes.INTEGER,
    trans_code: DataTypes.STRING(2),
    trans_date: DataTypes.DATE,
    old_ui: DataTypes.INTEGER,
    old_rec_name: DataTypes.STRING(4000),
    old_term_type: DataTypes.STRING(1),
    old_term_ui: DataTypes.INTEGER,
    old_term_name: DataTypes.STRING(4000),
    new_ui: DataTypes.INTEGER,
    new_rec_name: DataTypes.STRING(4000),
    new_term_type: DataTypes.STRING(1),
    new_term_ui: DataTypes.INTEGER,
    new_term_name: DataTypes.STRING(4000),
    replace_flag_yn: DataTypes.STRING(1),
    replace_ui: DataTypes.INTEGER,
    replace_term_ui: DataTypes.INTEGER,
    replace_term_name: DataTypes.STRING(4000),
    new_heading_class: DataTypes.STRING(2),
    change_type: DataTypes.STRING(4000),
    dcms_pt_ui: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'yep_scr_terms',
  });
  return yep_scr_terms;
};