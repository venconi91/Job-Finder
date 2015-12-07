app.factory('jobService', function($q, JobResource) {
    return {
        getJobs: function(){
        	var deferred = $q.defer();

        	JobResource
        	.query()
        	.$promise
        	.then(function(jobs){
        		deferred.resolve(jobs)
        	}, function(err){
        		deferred.reject(err)
        	})

        	return deferred.promise;

        },
        searchJobs: function(){
            var deferred = $q.defer();

            JobResource
            .query()
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