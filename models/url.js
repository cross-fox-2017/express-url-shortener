'use strict';
const faker = require('faker')
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shorten_url: DataTypes.STRING,
    click_count: DataTypes.INTEGER
  },{
    hooks:{
      beforeCreate: function(url,options){
        url.shorten_url = faker.random.number()
        url.click_count = 0
      }
    }
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Url;
};
