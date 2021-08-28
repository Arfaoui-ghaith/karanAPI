'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cur_desc_fx extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cur_desc_fx.init({
    task_id: {
      type: DataTypes.INTEGER
    },
    trans_code: {
      type: DataTypes.STRING(2),
      allowNull: {
        args: false,
        msg: "Please trans_code can't be Null!"
      }
    },
    trans_date: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: "Please trans_date can't be Null!"
      }
    },
    old_ui: {
      type: DataTypes.INTEGER
    },
    new_ui: {
      type: DataTypes.INTEGER
    },
    old_fx_ui: {
      type: DataTypes.INTEGER
    },
    new_fx_ui: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'cur_desc_fx',
  });
  return cur_desc_fx;
};