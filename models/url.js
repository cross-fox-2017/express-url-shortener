'use strict';
const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
let b = ''
for (var i = 0; i < 7; i++) {
  b += a[Math.floor(Math.random()*a.length)]
}

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shorturl: DataTypes.STRING,
    clickcount: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(url, options) {
        url.shorturl = b,
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
