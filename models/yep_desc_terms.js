'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_desc_terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_desc_terms.init({
    task_id: DataTypes.INTEGER,
    trans_code: DataTypes.STRING(2),
    trans_date: DataTypes.DATE,
    old_ui: DataTypes.INTEGER,
    old_rec_name: DataTypes.STRING(255),
    old_term_type: DataTypes.STRING(1),
    old_term_ui: DataTypes.INTEGER,
    old_term_name: DataTypes.STRING(255),
    old_prtflag: DataTypes.STRING(1),
    old_ev: DataTypes.STRING(255),
    new_ui: DataTypes.INTEGER,
    new_rec_name: DataTypes.STRING(255),
    new_term_type: DataTypes.STRING(1),
    new_term_ui: DataTypes.INTEGER,
    new_term_name: DataTypes.STRING(255),
    new_prtflag: DataTypes.STRING(1),
    new_ev: DataTypes.STRING(255),
    new_heading_class: DataTypes.STRING(2),
    replace_flag_yn: DataTypes.STRING(1),
    replace_ui: DataTypes.INTEGER,
    replace_term_ui: DataTypes.INTEGER,
    replace_term_name: DataTypes.STRING(255),
    dcms_pt_ui: DataTypes.INTEGER,
    change_type: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'yep_desc_terms',
  });
  return yep_desc_terms;
};