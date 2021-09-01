'use strict';
const fs = require('fs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync('./storage/yep_hm_sweep.csv')
      .toString() // convert Buffer to string
      .split('\n') // split string to lines
      .map(e => e.trim()) // remove white spaces for each line
      .map(e => e.split(',').map(e => e.trim())); // split each line to array

    return queryInterface.bulkInsert('yep_hm_sweep', data.map(el => {
      return {
        task_id: el[0] * 1,
        chem_ui: el[1] * 1,
        chem_id: el[2] * 1,
        desc_ui: el[3] * 1,
        mesh_id: el[4] * 1,
        qual_ui: el[5] * 1,
        meshsh_id: el[6] == "" ? null : el[6],
        scr_origin: el[7] == "" ? null : el[7],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('yep_hm_sweep', null, {});
  }
};
