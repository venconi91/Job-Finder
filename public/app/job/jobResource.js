app.factory('JobResource', function($resource) {
    var jobResource = $resource('/api/jobs/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return jobResource;
})