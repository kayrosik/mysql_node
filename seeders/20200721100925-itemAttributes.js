'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    await queryInterface.bulkInsert('ItemAttributes', [{
      id: 1,
      itemId: 1,
      attributeId: 2,
      value: '300',
      createdAt,
      updatedAt,
    }, {
      id: 2,
      itemId: 1,
      attributeId: 1,
      value: '300',
      createdAt,
      updatedAt,
    }, {
      id: 3,
      itemId: 3,
      attributeId: 1,
      value: '100',
      createdAt,
      updatedAt,
    }, {
      id: 4,
      itemId: 2,
      attributeId: 4,
      value: 'lacoste',
      createdAt,
      updatedAt,
    }, {
      id: 5,
      itemId: 2,
      attributeId: 1,
      value: '1500',
      createdAt,
      updatedAt,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ItemAttributes', null, {});
  }
};
