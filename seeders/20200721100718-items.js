'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    await queryInterface.bulkInsert('Items', [{
      id: 1,
      name: 'Titanik',
      createdAt,
      updatedAt,
    }, {
      id: 2,
      name: 'Burger',
      createdAt,
      updatedAt,
    }, {
      id: 3,
      name: 'Socks',
      createdAt,
      updatedAt,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
