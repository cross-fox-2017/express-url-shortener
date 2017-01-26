'use strict';
module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define('Data', {
    link: DataTypes.STRING,
    shorten_link: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
        hooks: {
        beforeCreate: function(data, options) {

          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for( var i=0; i < 5; i++ ){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          data.shorten_link = text,
          data.count = 0
        }
      }
  });
  return Data;
};
