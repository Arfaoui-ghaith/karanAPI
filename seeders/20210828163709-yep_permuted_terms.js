'use strict';
const fs = require('fs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync('./storage/yep_permuted_terms.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

  return queryInterface.bulkInsert('yep_permuted_terms', data.map(el => {
    let tab = [];
    let ch = "";
    let p = false;
    for(let i=0; i<el.length; i++){
      if(el[i].indexOf('"') > -1){
        if(p){
          tab.push((ch+", "+el[i]).slice(1,-1));
          ch="";
        }
        p = !p;
      }
      if(p){
        if(ch!==""){
          ch=ch+", "+el[i];
        }else{
          ch=el[i];
        }
      }
      if(el[i].indexOf('"') < 0 && !p){
        tab.push(el[i]);
      }
    }

    return {
      task_id: tab[0]== '' ? null : tab[0],
      trans_code: tab[2]== '' ? null : tab[2],
      trans_date: new Date(tab[1]),
      old_ui: tab[3]== '' ? null : tab[3],
      old_rec_name: tab[4]== '' ? null : tab[4],
      old_term_ui: tab[5]== '' ? null : tab[5],
      old_term_name: tab[6]== '' ? null : tab[6],
      old_dcms_pt_ui: tab[7]== '' ? null : tab[7],
      new_ui: tab[8]== '' ? null : tab[8],
      new_rec_name: tab[9]== '' ? null : tab[9],
      new_term_ui: tab[10]== '' ? null : tab[10],
      new_term_name: tab[11]== '' ? null : tab[11],
      new_heading_class: tab[12]== '' ? null : tab[12],
      new_dcms_pt_ui: tab[13]== '' ? null : tab[13],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('yep_permuted_terms', null, {});
  }
};
