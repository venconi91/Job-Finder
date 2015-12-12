app.factory('ApplyingsResource', function($resource) {
    var applyingsResource = $resource('/api/applyings/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return applyingsResource;
})