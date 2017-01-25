'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url_link: DataTypes.STRING,
    short_url: DataTypes.STRING,
    click_count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: function(link, options) {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for( var i=0; i < 5; i++ ){
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

          link.short_url = text,
          link.click_count = 0
      }
    }
  });
  return Url;
};
