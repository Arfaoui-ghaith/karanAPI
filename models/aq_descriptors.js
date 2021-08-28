'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aq_descriptors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  aq_descriptors.init({
    mesh_year: {
      type: DataTypes.STRING(4),
      allowNull: {
        args: false,
        msg: "Please mesh_year can't be Null!"
      },
      validate: {
        is(value){
          if (!value.match(/^[0-9]+$/)) {
            throw new Error('Please year must contains only digits!');
          }
        }
      }
    },
    desc_ui: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please desc_ui can't be Null!"
      }
    },
    qual_ui: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please qual_ui can't be Null!"
      }
    },
    aq: {
      type: DataTypes.STRING(2),
      allowNull: {
        args: false,
        msg: "Please desc_ui can't be Null!"
      }
    }
  }, {
    sequelize,
    modelName: 'aq_descriptors',
  });
  return aq_descriptors;
};