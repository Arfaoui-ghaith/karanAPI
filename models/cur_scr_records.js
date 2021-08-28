'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cur_scr_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cur_scr_records.init({
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
    old_cas_registry_number: {
      type: DataTypes.STRING(4000)
    },
    new_ui: {
      type: DataTypes.INTEGER
    },
    new_cas_registry_number: {
      type: DataTypes.STRING(4000)
    },
    old_name: {
      type: DataTypes.STRING(4000)
    },
    new_name: {
      type: DataTypes.STRING(4000)
    },
    old_term_type: {
      type: DataTypes.STRING(1)
    },
    new_term_type: {
      type: DataTypes.STRING(1)
    },
    old_term_ui: {
      type: DataTypes.INTEGER
    },
    new_term_ui: {
      type: DataTypes.INTEGER
    },
    processing_flag: {
      type: DataTypes.STRING(1)
    },
    defective_yn: {
      type: DataTypes.STRING(1)
    }
  }, {
    sequelize,
    modelName: 'cur_scr_records',
  });
  return cur_scr_records;
};