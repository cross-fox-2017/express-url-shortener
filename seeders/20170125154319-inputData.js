'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Urls', [{
      url: 'pesbuk',
      shorturls: 'asal nih',
      click_count: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: 'insta',
      shorturls: 'jhtgkasnd nih',
      click_count: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: 'twitbuk',
      shorturls: 'asal sdfdh',
      click_count: 0,
      createdAt: new Date(),
      updatedAt: new Date()

    }
  ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
