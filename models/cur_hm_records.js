'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cur_hm_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cur_hm_records.init({
    task_id: {
      type: DataTypes.INTEGER
    },
    trans_code: {
      type: DataTypes.STRING(2)
    },
    trans_date: {
      type: DataTypes.DATE
    },
    scr_ui: {
      type: DataTypes.INTEGER
    },
    scr_name: {
      type: DataTypes.STRING(4000)
    },
    hm_ui: {
      type: DataTypes.INTEGER
    },
    heading_mapped_to_name: {
      type: DataTypes.STRING(4000)
    },
    hm_sh_ui: {
      type: DataTypes.INTEGER,
    },
    heading_mapped_to_sh_name: {
      type: DataTypes.STRING(4000)
    },
    defective_yn: {
      type: DataTypes.STRING(1)
    },
    hmui_central_point_flag: {
      type: DataTypes.STRING(1)
    },
    hmsh_central_point_flag: {
      type: DataTypes.STRING(1)
    }

  }, {
    sequelize,
    modelName: 'cur_hm_records',
  });
  return cur_hm_records;
};