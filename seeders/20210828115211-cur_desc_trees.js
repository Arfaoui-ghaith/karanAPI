'use strict';
const fs = require('fs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync('./storage/curr_desc_trees.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

  return queryInterface.bulkInsert('cur_desc_trees', data.map(el => {
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
      trans_code: tab[1]== '' ? null : tab[1],
      trans_date: new Date(tab[2]),
      old_ui: tab[3]== '' ? null : tab[3],
      new_ui: tab[4]== '' ? null : tab[4],
      old_mn_ui: tab[5]== '' ? null : tab[5],
      new_mn_ui: tab[6]== '' ? null : tab[6],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cur_desc_trees', null, {});
  }
};
