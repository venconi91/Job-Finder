app.factory('positionService', function($q, PositionResource) {
    return {
        postPosition: function(position) {
            var deferred = $q.defer();

            PositionResource
            .save(position)
            .$promise
            .then(function(newPosition) {
                deferred.resolve(newPosition);
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        getPositions: function(){
        	var deferred = $q.defer();

        	PositionResource
        	.query()
        	.$promise
        	.then(function(positions){
        		deferred.resolve(positions)
        	}, function(err){
        		deferred.reject(err)
        	})

        	return deferred.promise;

        }
    }
})