'use strict';
module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    url: DataTypes.STRING,
    shorturl: DataTypes.STRING,
    clickcount: DataTypes.INTEGER
  },{
    hooks: {
      beforeCreate: function(Url, options) {
        Url.shorturl = random(),
        Url.clickcount = 0
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

function random() {
  let result = []
  for (let i = 0; i < 8; i++){
    if (i%4 == 0) {
      let randA = String.fromCharCode(Math.floor(Math.random()*(90-65)+65))
      result.push(randA)
    } else if (i%3 == 0){
      let randB = String.fromCharCode(Math.floor(Math.random()*(122-97)+97))
      result.push(randB)
    } else {
      let randC = Math.floor(Math.random()*9)
      result.push(randC)
    }
  }
  return result.join("")
}
