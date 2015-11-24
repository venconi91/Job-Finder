app.controller('SignUpCtrl', function($scope, $location, auth) {
    $scope.signup = function(user) {
        auth.signup(user).then(function() {
            
            $location.path('/');
        })
    }
});