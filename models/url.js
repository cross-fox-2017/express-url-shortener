'use strict';

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shorturls: DataTypes.STRING,
    click_count: DataTypes.INTEGER
  },

  {
    hooks: {
      beforeCreate: function(url,option){
        let a=Math.floor(Math.random()*999999)
        url.shorturls= a,
        url.click_count= 0
      }
    }
  },

  {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return Url;
};
