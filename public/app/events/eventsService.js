app.factory('eventsService', function($q, EventsResource) {
    return {
        getEvents: function(){
        	var deferred = $q.defer();

        	EventsResource
        	.query()
        	.$promise
        	.then(function(events){
        		deferred.resolve(events)
        	}, function(err){
        		deferred.reject(err)
        	})

        	return deferred.promise;

        },
        createEvent: function(event){
            var deferred = $q.defer();

            EventsResource
            .save(event)
            .$promise
            .then(function(event) {
                deferred.resolve(event);
            }, function(err) {
                deferred.reject(err);
            });

            return deferred.promise;
        }
    }
})