'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

    await queryInterface.bulkInsert('Attributes', [{
      id: 1,
      name: 'price',
      createdAt,
      updatedAt,
    }, {
      id: 2,
      name: 'duration',
      createdAt,
      updatedAt,
    }, {
      id: 3,
      name: 'description',
      createdAt,
      updatedAt,
    }, {
      id: 4,
      name: 'brand',
      createdAt,
      updatedAt,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Attributes', null, {});
  }
};
