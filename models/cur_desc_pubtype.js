'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cur_desc_pubtype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  cur_desc_pubtype.init({
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trans_code:{ 
      type: DataTypes.STRING(2),
      allowNull: false
    },
    trans_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    task_type: DataTypes.STRING(10),
    authority_action_yn: DataTypes.STRING(1),
    creation_method: DataTypes.STRING(10),
    dcms_year: DataTypes.STRING(4),
    cur_pubtyp_type: DataTypes.INTEGER,
    cur_subclass_yn: DataTypes.STRING(1),
    cur_pubtyp_id_only_valid_for: DataTypes.INTEGER,
    cur_pubtyp_id_a_subset_of: DataTypes.INTEGER,
    cur_title_rubric: DataTypes.STRING(100),
    cur_enabled_yn: DataTypes.STRING(1),
    cur_num_ref_required_yn: DataTypes.STRING(1),
    cur_publication_type_label: DataTypes.STRING(240),
    new_pubtyp_type: DataTypes.INTEGER,
    new_subclass_yn: DataTypes.STRING(1),
    new_pubtyp_id_only_valid_for: DataTypes.INTEGER,
    new_pubtyp_id_a_subset_of: DataTypes.INTEGER,
    new_title_rubric: DataTypes.STRING(100),
    new_enabled_yn: DataTypes.STRING(1),
    new_num_ref_required_yn: DataTypes.STRING(1),
    new_publication_type_label: DataTypes.STRING(240),
    cur_value: DataTypes.STRING(255),
    new_value: DataTypes.STRING(4000),
    cur_ui: DataTypes.INTEGER,
    cur_desc_ui: DataTypes.INTEGER,
    cur_pt_ui: DataTypes.INTEGER,
    new_ui: DataTypes.INTEGER,
    new_desc_ui: DataTypes.INTEGER,
    new_pt_ui: DataTypes.INTEGER,
    cur_type: DataTypes.STRING(2),
    new_type: DataTypes.STRING(2),
    dcms_representation: DataTypes.STRING(2),
    sequence: DataTypes.INTEGER,
    instructions: DataTypes.STRING(2000),
    pubmed_search: DataTypes.STRING(1000),
    dcms_search: DataTypes.STRING(255),
    completed_count: DataTypes.INTEGER,
    deleted_count: DataTypes.INTEGER,
    in_process_count: DataTypes.INTEGER,
    date_rejected: DataTypes.DATE,
    record_creator: DataTypes.STRING(50),
    record_maintainer: DataTypes.STRING(50),
    record_authorizer: DataTypes.STRING(50),
    authorized_type: DataTypes.STRING(100),
    cur_heading_class: DataTypes.STRING(2),
    cur_subheadings_exist_yn: DataTypes.STRING(1),
    cur_cas_registry_number: DataTypes.STRING(255),
    cur_check_tag: DataTypes.STRING(1),
    cur_check_tag_label: DataTypes.STRING(30),
    cur_consider_also: DataTypes.STRING(100),
    cur_indeterm_id: DataTypes.INTEGER,
    new_heading_class: DataTypes.STRING(2),
    new_subheadings_exist_yn: DataTypes.STRING(1),
    new_cas_registry_number: DataTypes.STRING(255),
    new_check_tag: DataTypes.STRING(1),
    new_check_tag_label: DataTypes.STRING(30),
    new_consider_also: DataTypes.STRING(100),
    new_indeterm_id: DataTypes.INTEGER,
    search_result: DataTypes.STRING(2000),
    q_flag: DataTypes.STRING(1),
    date_created: DataTypes.DATE,
    date_updated: DataTypes.DATE,
    date_authorized: DataTypes.DATE,
    date_scheduled: DataTypes.DATE,
    date_populated: DataTypes.DATE,
    date_completed: DataTypes.DATE,
    chkout: DataTypes.STRING(1),
    chkout_by: DataTypes.STRING(50),
    chkout_date: DataTypes.DATE,
    note: DataTypes.STRING(4000),
    group_num: DataTypes.INTEGER,
    cit_subset_flag: DataTypes.STRING(2)
  }, {
    sequelize,
    modelName: 'cur_desc_pubtype',
  });
  return cur_desc_pubtype;
};