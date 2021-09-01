'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class yep_hm_sweep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  yep_hm_sweep.init({
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please task_id can't be Null!"
      }
    },
    chem_ui: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please chem_ui can't be Null!"
      }
    },
    chem_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please chem_id can't be Null!"
      }
    },
    desc_ui: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please desc_ui can't be Null!"
      }
    },
    mesh_id: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please mesh_id can't be Null!"
      }
    },
    qual_ui: DataTypes.INTEGER,
    meshsh_id: DataTypes.INTEGER,
    scr_origin: DataTypes.STRING(5)
  }, {
    sequelize,
    modelName: 'yep_hm_sweep',
    tableName: 'yep_hm_sweep'
  });
  return yep_hm_sweep;
};