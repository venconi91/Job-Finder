var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();

module.exports = function(sequelize, DataTypes){
  
  var Apply = sequelize.define('Apply', {
    title: {
      type: Sequelize.STRING
    }
  }//, {
   // classMethods: {
   //   associate: function(models){
   //     //Apply.belongsTo(models.User);
    //    //Apply.belongsTo(models.JobPosition);
    //  }
    //}
  //}
  );

  return Apply;
}