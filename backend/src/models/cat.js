'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cat = sequelize.define('Cat', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    enjoys: DataTypes.TEXT
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};

