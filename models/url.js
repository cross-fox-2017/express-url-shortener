'use strict';

function makeurl()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shortener: DataTypes.STRING,
    click_count: DataTypes.INTEGER
  },

  {
   hooks: {
   beforeCreate: function(url, options) {
     url.shortener = makeurl(),
     url.click_count = 0
   }
 }
},

  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Url;
};
