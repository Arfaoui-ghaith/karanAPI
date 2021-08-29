'use strict';
const fs = require('fs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync('./storage/cur_scr_pref_terms.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

  return queryInterface.bulkInsert('cur_scr_pref_terms', data.map(el => {
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
      task_id: tab[0],
      trans_code: tab[1],
      trans_date: new Date(tab[2]),
      user_id: tab[3],
      old_ui: tab[4],
      old_rec_name: tab[5],
      old_value: tab[6],
      old_term_ui: tab[7] == '' ? null : tab[7],
      old_term_type: tab[8] == '' ? null : tab[8],
      new_ui: tab[9] == '' ? null : tab[9],
      new_rec_name: tab[10] == '' ? null : tab[10],
      new_value: tab[11] == '' ? null : tab[11],
      new_term_ui: tab[12] == '' ? null : tab[12],
      new_term_type: tab[13] == '' ? null : tab[13],
      processing_flag: tab[14] == '' ? null : tab[14],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cur_scr_pref_terms', null, {});
  }
};
