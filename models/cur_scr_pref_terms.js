'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cur_scr_pref_terms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cur_scr_pref_terms.init({
    task_id: {
      type: DataTypes.INTEGER
    },
    trans_code: {
      type: DataTypes.STRING(2)
    },
    trans_date: {
      type: DataTypes.DATE
    },
    user_id: {
      type: DataTypes.STRING(50)
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
    old_term_ui: {
      type: DataTypes.INTEGER
    },
    old_term_type: {
      type: DataTypes.STRING(1)
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
    new_term_ui: {
      type: DataTypes.INTEGER
    },
    new_term_type: {
      type: DataTypes.STRING(1)
    },
    processing_flag: {
      type: DataTypes.STRING(1)
    }
  }, {
    sequelize,
    modelName: 'cur_scr_pref_terms',
  });
  return cur_scr_pref_terms;
};