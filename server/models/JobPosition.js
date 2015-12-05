var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();

module.exports = function(sequelize, DataTypes){
  var JobPosition = sequelize.define('JobPosition', {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 30],
            msg: "Job Title Should be in interval [3, 30]"
          },
        }
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salary: {
        type: Sequelize.INTEGER,
      },
      location: {
        type: Sequelize.STRING
      }}, {
      classMethods: {
        associate: function(models){
          JobPosition.belongsTo(models.User);
          //JobPosition.hasMany(model.JobPosition);
          JobPosition.belongsToMany( models.User, {
            as: "Apply",
            through: models.Apply
          });
        }
      }
  });

  return JobPosition;
}