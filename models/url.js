'use strict';
const a = Math.floor(Math.random()*1000000)

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shorturl: DataTypes.STRING,
    clickcount: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(url, options) {
        url.shorturl = a,
        url.clickcount = 0
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Url;
};
