app.controller('signinCtrl', function($scope, $location, identity, auth) {
    $scope.identity = identity;

    $scope.signin = function(user) {
        auth.signin(user).then(function(success) {
            if (success) {
                //notifier.success('Successful login!');
                console.log("success")
            }
            else {
                //notifier.error('Username/Password combination is not valid!');
                console.log("success")
            }
        });
    }

    $scope.logout = function() {
        auth.logout().then(function() {
            //notifier.success('Successful logout!');
            if ($scope.user) {
                $scope.user.username = '';
                $scope.user.password = '';
            }
            $location.path('/');
        })
    }
})