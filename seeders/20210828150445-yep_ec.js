'use strict';
const fs = require('fs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync('./storage/yep_ec.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

  return queryInterface.bulkInsert('yep_ec', data.map(el => {
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
      trans_code: tab[0]== '' ? null : tab[0],
      trans_date: new Date(tab[1]),
      old_rec_ui: tab[2]== '' ? null : tab[2],
      old_value: tab[3]== '' ? null : tab[3],
      old_term_ui: tab[4]== '' ? null : tab[4],
      old_shin: tab[5]== '' ? null : tab[5],
      old_shin_value: tab[6]== '' ? null : tab[6],
      old_shin_term_ui: tab[7]== '' ? null : tab[7],
      old_shin_status: tab[8]== '' ? null : tab[8],
      old_ec_ui: tab[9]== '' ? null : tab[9],
      old_ec_value: tab[10]== '' ? null : tab[10],
      old_ec_term_ui: tab[11]== '' ? null : tab[11],
      old_ec_status: tab[12]== '' ? null : tab[12],
      old_shout: tab[13]== '' ? null : tab[13],
      old_shout_value: tab[14]== '' ? null : tab[14],
      old_shout_term_ui: tab[15]== '' ? null : tab[15],
      old_shout_status: tab[16]== '' ? null : tab[16],
      new_rec_ui: tab[17]== '' ? null : tab[17],
      new_value: tab[18]== '' ? null : tab[18],
      new_term_ui: tab[19]== '' ? null : tab[19],
      new_shin: tab[20]== '' ? null : tab[20],
      new_shin_value: tab[21]== '' ? null : tab[21],
      new_shin_term_ui: tab[22]== '' ? null : tab[22],
      new_ec_ui: tab[23]== '' ? null : tab[23],
      new_ec_value: tab[24]== '' ? null : tab[24],
      new_ec_term_ui: tab[25]== '' ? null : tab[25],
      new_shout: tab[26]== '' ? null : tab[26],
      new_shout_value: tab[27]== '' ? null : tab[27],
      new_shout_term_ui: tab[28]== '' ? null : tab[28],
      source_id: tab[29]== '' ? null : tab[29],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('yep_ec', null, {});
  }
};
