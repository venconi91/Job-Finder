app.factory('MyApplyingsResource', function($resource) {
    var myApplyingsResource = $resource('/api/myApplyings', {id:'@id'}, { update: {method: 'PUT', isArray: true}});

    return myApplyingsResource;
})