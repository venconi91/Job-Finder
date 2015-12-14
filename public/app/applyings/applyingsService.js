app.factory('applyingsService', function($q, ApplyingsResource) {
    return {
        apply: function(positionId){
            var deferred = $q.defer();

            ApplyingsResource
            .save({positionId: positionId})
            .$promise
            .then(function(jobs){
                deferred.resolve(jobs)
            }, function(err){
                deferred.reject(err)
            })

            return deferred.promise;
        }
    }
})