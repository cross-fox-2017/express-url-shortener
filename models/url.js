'use strict';

var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url_name: DataTypes.STRING,
    url_short: DataTypes.STRING,
    click_count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: function(link, options) {
        let scrable = "abCdefgHklMNsTuVWxYZ9856322568"
        let scrabled = ""
        for(var i = 0; i < 6; i++){
          scrabled += scrable.charAt(Math.floor(Math.random()*20))
        }
        link.url_short = scrabled,
        link.click_count = 0
      }
    }
  }
);
return Url;
};
