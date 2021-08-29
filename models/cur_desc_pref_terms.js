'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cur_desc_pref_terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cur_desc_pref_terms.init({
    task_id: DataTypes.INTEGER,
    trans_code: DataTypes.STRING(2),
    trans_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    old_ui: DataTypes.INTEGER,
    old_rec_name: DataTypes.STRING(4000),
    old_value: DataTypes.STRING(4000),
    old_term_type: DataTypes.STRING(1),
    old_term_ui: DataTypes.INTEGER,
    old_term_name: DataTypes.STRING(255),
    new_ui: DataTypes.INTEGER,
    new_rec_name: DataTypes.STRING(4000),
    new_value: DataTypes.STRING(4000),
    new_term_type: DataTypes.STRING(1),
    new_term_ui: DataTypes.INTEGER,
    new_term_name: DataTypes.STRING(255),
    dcms_pt_ui: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cur_desc_pref_terms',
  });
  return cur_desc_pref_terms;
};