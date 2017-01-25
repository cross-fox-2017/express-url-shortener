'use strict';

function random(){
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < 5; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];

module.exports = function(sequelize, DataTypes) {
  var Links = sequelize.define('Links', {
    link: DataTypes.STRING,
    short_url: {
        type: DataTypes.STRING,
        unique: true
    },
    count: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(link, options) {
        link.short_url = `${config.base_url}${random()}`
        link.count = 1;
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Links;
};
