'use strict';

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.TEXT,
    short_url: DataTypes.TEXT,
    click_count: DataTypes.INTEGER
  },
  {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      },
      hooks: {
        beforeCreate:function(url, option) {
          var text = ""
          var unique = "ASBCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsstuvwxyz0123456789"
          for (let i = 0; i < 5; i++) {
            text += unique[Math.floor(Math.random()*unique.length)]
          }
          url.short_url = text
          url.click_count= 1
        }
      }
    }
);
  return Url;
};
