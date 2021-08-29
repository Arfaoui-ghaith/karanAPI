'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cur_desc_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cur_desc_records.init({
    task_id: DataTypes.INTEGER,
    trans_code: DataTypes.STRING(2),
    trans_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    old_ui: DataTypes.INTEGER,
    old_name: DataTypes.STRING(4000),
    old_term_type: DataTypes.STRING(1),
    old_term_ui: DataTypes.INTEGER,
    old_subheading: DataTypes.STRING(255),
    old_cas_registry_number: DataTypes.STRING(255),
    old_consider_also: DataTypes.STRING(255),
    old_heading_class: DataTypes.STRING(2),
    old_subheadings_exist_yn: DataTypes.STRING(1),
    new_ui: DataTypes.INTEGER,
    new_name: DataTypes.STRING(4000),
    new_term_type: DataTypes.STRING(1),
    new_term_ui: DataTypes.INTEGER,
    new_subheading: DataTypes.STRING(255),
    new_cas_registry_number: DataTypes.STRING(255),
    new_consider_also: DataTypes.STRING(100),
    new_heading_class: DataTypes.STRING(2),
    new_subheadings_exist_yn: DataTypes.STRING(1),
    special_flag: DataTypes.STRING(1)
  }, {
    sequelize,
    modelName: 'cur_desc_records',
  });
  return cur_desc_records;
};