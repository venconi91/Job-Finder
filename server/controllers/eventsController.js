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
        var userId = req.user.id;
        models.Event.findAll({
            where: {
                UserId: userId
            }
        })
        .then(function(events, count){
            console.log(count)
            res.send(events)
        })
        .catch(function(err){
            res.status(404).send(err);
        })
    }
}