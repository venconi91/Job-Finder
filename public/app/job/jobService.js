app.factory('jobService', function($q, $resource, JobResource) {
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
        searchJobs: function(searchText, locationName){
            return $resource('/api/jobs/search' + '?searchText=:searchText&locationName=:locationName', {
                searchText: searchText,
                locationName: locationName
            }).query();
        }
    }
})