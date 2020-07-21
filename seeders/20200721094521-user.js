'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

    await queryInterface.bulkInsert('Users', [{
      first_name: 'admin',
      last_name: 'admin',
      email: 'admin.admin@yandex.ru',
      password: 'wUlJANDjNFPmcZ3xuaygBtJOPv7utUm/+80/XvMSGPi2j/bNu1e1UbFuLxKnzEVs0Ob8SzrwRbq0ktPKD9AKkg==',
      salt: '946a11689d85abc2cb001069d1605cb4a02bd5cc49a6a9a3206c830ad25d42cc52d04f3df2305dbe623b7bf79dc10cce395bad0e7cbf918840d2f94f77c34374',
      createdAt,
      updatedAt,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
