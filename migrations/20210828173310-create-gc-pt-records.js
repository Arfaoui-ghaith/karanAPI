'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gc_pt_records', {
      task_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      trans_code: { 
        type: Sequelize.STRING(2),
        allowNull: false
      },
      trans_date: {
         type: Sequelize.DATE,
         allowNull: false
      },
      task_type: Sequelize.STRING(10),
      authority_action_yn: Sequelize.STRING(1),
      creation_method: Sequelize.STRING(10),
      dcms_year: Sequelize.STRING(4),
      cur_pubtyp_type: Sequelize.INTEGER,
      cur_subclass_yn: Sequelize.STRING(1),
      cur_pubtyp_id_only_valid_for: Sequelize.INTEGER,
      cur_pubtyp_id_a_subset_of: Sequelize.INTEGER,
      cur_title_rubric: Sequelize.STRING(100),
      cur_enabled_yn: Sequelize.STRING(1),
      cur_num_ref_required_yn: Sequelize.STRING(1),
      cur_publication_type_label: Sequelize.STRING(240),
      new_pubtyp_type: Sequelize.INTEGER,
      new_subclass_yn: Sequelize.STRING(1),
      new_pubtyp_id_only_valid_for: Sequelize.INTEGER,
      new_pubtyp_id_a_subset_of: Sequelize.INTEGER,
      new_title_rubric: Sequelize.STRING(100),
      new_enabled_yn: Sequelize.STRING(1),
      new_num_ref_required_yn: Sequelize.STRING(1),
      new_publication_type_label: Sequelize.STRING(240),
      cur_value: Sequelize.STRING(255),
      new_value: Sequelize.STRING(4000),
      cur_ui: Sequelize.INTEGER,
      cur_desc_ui: Sequelize.INTEGER,
      cur_pt_ui: Sequelize.INTEGER,
      new_ui: Sequelize.INTEGER,
      new_desc_ui: Sequelize.INTEGER,
      new_pt_ui: Sequelize.INTEGER,
      cur_type: Sequelize.STRING(2),
      new_type: Sequelize.STRING(2),
      dcms_representation: Sequelize.STRING(2),
      sequence: Sequelize.INTEGER,
      instructions: Sequelize.STRING(2000),
      pubmed_search: Sequelize.STRING(1000),
      dcms_search: Sequelize.STRING(255),
      completed_count: Sequelize.INTEGER,
      deleted_count: Sequelize.INTEGER,
      in_process_count: Sequelize.INTEGER,
      date_rejected: Sequelize.DATE,
      record_creator: Sequelize.STRING(50),
      record_maintainer: Sequelize.STRING(50),
      record_authorizer: Sequelize.STRING(50),
      authorized_type: Sequelize.STRING(100),
      cur_heading_class: Sequelize.STRING(2),
      cur_subheadings_exist_yn: Sequelize.STRING(1),
      cur_cas_registry_number: Sequelize.STRING(255),
      cur_check_tag: Sequelize.STRING(1),
      cur_check_tag_label: Sequelize.STRING(30),
      cur_consider_also: Sequelize.STRING(100),
      cur_indeterm_id: Sequelize.INTEGER,
      new_heading_class: Sequelize.STRING(2),
      new_subheadings_exist_yn: Sequelize.STRING(1),
      new_cas_registry_number: Sequelize.STRING(255),
      new_check_tag: Sequelize.STRING(1),
      new_check_tag_label: Sequelize.STRING(30),
      new_consider_also: Sequelize.STRING(100),
      new_indeterm_id: Sequelize.INTEGER,
      search_result: Sequelize.STRING(2000),
      q_flag: Sequelize.STRING(1),
      date_created: Sequelize.DATE,
      date_updated: Sequelize.DATE,
      date_authorized: Sequelize.DATE,
      date_scheduled: Sequelize.DATE,
      date_populated: Sequelize.DATE,
      date_completed: Sequelize.DATE,
      chkout: Sequelize.STRING(1),
      chkout_by: Sequelize.STRING(50),
      chkout_date: Sequelize.DATE,
      note: Sequelize.STRING(4000),
      group_num: Sequelize.INTEGER,
      cit_subset_flag: Sequelize.STRING(2),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gc_pt_records');
  }
};