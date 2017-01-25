'use strict';
function random() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 8; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

module.exports = function(sequelize, DataTypes) {
  var Urls = sequelize.define('Urls', {
    url: DataTypes.STRING,
    shortened: DataTypes.STRING,
    clicked: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function (url, options) {
        url.clicked = 0,
        url.shortened = `${config.base_url}${random()}`
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Urls;
};
