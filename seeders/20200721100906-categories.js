'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    await queryInterface.bulkInsert('Categories', [{
      id: 1,
      name: 'movie',
      createdAt,
      updatedAt,
    }, {
      id: 2,
      name: 'clothes',
      createdAt,
      updatedAt,
    },{
      id: 3,
      name: 'food',
      createdAt,
      updatedAt,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
