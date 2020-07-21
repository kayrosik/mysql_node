'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    
    await queryInterface.bulkInsert('ItemCategories', [{
      id: 1,
      itemId: 1,
      categoryId: 1,
      createdAt,
      updatedAt,
    }, {
      id: 2,
      itemId: 3,
      categoryId: 3,
      createdAt,
      updatedAt,
    }, {
      id: 3,
      itemId: 2,
      categoryId: 2,
      createdAt,
      updatedAt,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ItemCategories', null, {});
  }
};
