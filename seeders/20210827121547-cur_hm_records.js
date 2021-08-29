'use strict';
const fs = require('fs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync('./storage/cur_hm_records.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

  return queryInterface.bulkInsert('cur_hm_records', data.map(el => {
    let tab = [el[0],el[1],el[2],el[3]];
    let ch = "";
    let p = false;
    for(let i=4; i<el.length; i++){
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
      scr_ui: tab[3],
      scr_name: tab[4],
      hm_ui: tab[5],
      heading_mapped_to_name: tab[6],
      hm_sh_ui: tab[7] == '' ? null : tab[7],
      heading_mapped_to_sh_name: tab[8] == '' ? null : tab[8],
      defective_yn: tab[9] == '' ? null : tab[9],
      hmui_central_point_flag: tab[10] == '' ? null : tab[10],
      hmsh_central_point_flag: tab[11] == '' ? null : tab[11],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cur_hm_records', null, {});
  }
};
