'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_desc_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_desc_records.init({
    task_id: {
      type: DataTypes.INTEGER
    },
    trans_code: {
      type: DataTypes.STRING(2)
    },
    trans_date: {
      type: DataTypes.DATE
    },
    old_ui: {
      type: DataTypes.INTEGER
    },
    old_name : {
      type: DataTypes.STRING(4000)
    },
    old_term_type : {
      type: DataTypes.STRING(1)
    },
    old_term_ui :{
        type: DataTypes.INTEGER
    },
    old_subheading : {
      type: DataTypes.STRING(4000)
    },
    old_cas_registry_number : {
      type: DataTypes.STRING(4000)
    },
    old_consider_also : {
      type: DataTypes.STRING(4000)
    },
    old_heading_class : {
      type: DataTypes.STRING(2)
    },
    old_subheadings_exist_yn : {
      type: DataTypes.STRING(1)
    },
    new_ui :{
        type: DataTypes.INTEGER
      },
    new_name : {
      type: DataTypes.STRING(4000)
    },
    new_term_type : {
      type: DataTypes.STRING(1)
    },
    new_term_ui :{
        type: DataTypes.INTEGER
      },
    new_subheading : {
      type: DataTypes.STRING(4000)
    },
    new_cas_registry_number : {
      type: DataTypes.STRING(4000)
    },
    new_consider_also : {
      type: DataTypes.STRING(4000)
    },
    new_heading_class : {
      type: DataTypes.STRING(2)
    },
    new_subheadings_exist_yn : {
      type: DataTypes.STRING(1)
    },
    special_flag : {
      type: DataTypes.STRING(1)
    }
  }, {
    sequelize,
    modelName: 'yep_desc_records',
  });
  return yep_desc_records;
};