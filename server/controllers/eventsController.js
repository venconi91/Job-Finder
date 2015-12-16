var models = require("../models");

module.exports = {
	createEvent: function (req, res) {
        var newEvent = models.Event.build(req.body);
        newEvent.UserId = req.user.id;
        newEvent.save()
        .then(function(newEvent){
            res.send(newEvent);
        })
        .catch(function(err){
            res.status(400).send(err);
        })
    },
    getEvents: function(req, res){
        var orFilter = [{isPublic: 1}];
        if (req.isAuthenticated()) {var userId = req.user.id; orFilter.push({UserId: userId})};

        models.Event.findAll({
            where: {
                $or: orFilter
            }
        })
        .then(function(events, count){
            res.send(events)
        })
        .catch(function(err){
            res.status(404).send(err);
        })
    }
}