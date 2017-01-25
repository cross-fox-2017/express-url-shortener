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
    return queryInterface.bulkInsert("Urls", [
    {
      url: "www.google.com",
      shortener: "localhost:3000/abcdefg",
      click_count: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: "www.facebook.com",
      shortener: "localhost:3000/123456",
      click_count: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
