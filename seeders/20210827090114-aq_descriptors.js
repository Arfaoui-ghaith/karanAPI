'use strict';
const fs = require('fs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = fs.readFileSync('./storage/aq_descriptors.csv')
      .toString() // convert Buffer to string
      .split('\n') // split string to lines
      .map(e => e.trim()) // remove white spaces for each line
      .map(e => e.split(',').map(e => e.trim())); // split each line to array

    return queryInterface.bulkInsert('aq_descriptors', data.map(el => {
      return {
        mesh_year: el[0],
        desc_ui: el[1] * 1,
        qual_ui: el[2] * 1,
        aq: el[3],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('aq_descriptors', null, {});
  }
};
