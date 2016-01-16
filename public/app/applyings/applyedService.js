app.factory('applyedService', function($q, $resource) {

    var applyedResource = $resource('/api/applyed/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return {
        getApplyed: function(jobPositionId){
            var deferred = $q.defer();

            applyedResource
            .query({jobPositionId: jobPositionId})
            .$promise
            .then(function(applyed){
                deferred.resolve(applyed)
            }, function(err){
                deferred.reject(err)
            })

            return deferred.promise;
        }
    }
})