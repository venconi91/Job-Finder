app.factory('applyingsService', function($q, ApplyingsResource, MyApplyingsResource) {
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
        },
        getMyApplyings: function(){
            var deferred = $q.defer();

            MyApplyingsResource
            .query()
            .$promise
            .then(function(myApplyings){
                deferred.resolve(myApplyings)
            }, function(err){
                deferred.reject(err)
            })

            return deferred.promise;
        }
    }
})