'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Yep_desc_pref_term extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Yep_desc_pref_term.init({
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
    old_rec_name: {
      type: DataTypes.STRING(4000)
    },
    old_value: {
      type: DataTypes.STRING(4000)
    },
    old_term_type: {
      type: DataTypes.STRING(1)
    },
    old_term_ui: {
      type: DataTypes.INTEGER
    },
    old_term_name: {
      type: DataTypes.STRING(4000)
    },
    new_ui: {
      type: DataTypes.INTEGER
    },
    new_rec_name: {
      type: DataTypes.STRING(4000)
    },
    new_value: {
      type: DataTypes.STRING(4000)
    },
    new_term_type: {
      type: DataTypes.STRING(1)
    },
    new_term_ui: {
      type: DataTypes.INTEGER
    },
    new_term_name: {
      type: DataTypes.STRING(4000)
    },
    dcms_pt_ui: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Yep_desc_pref_term',
    tableName: 'yep_desc_pref_terms'
  });
  return Yep_desc_pref_term;
};