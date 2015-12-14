var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();

module.exports = function(sequelize, DataTypes){
  var Event = sequelize.define('Event', {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      startsAt: {
        type: Sequelize.DATE
      },
      endsAt: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.ENUM("important", "warning", "info", "inverse", "success", "special"),
      },
      location: {
        type: Sequelize.STRING
      }}, {
      classMethods: {
        associate: function(models){
          Event.belongsTo(models.User);
        }
      }
  });

  return Event;
}