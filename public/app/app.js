var app = angular.module('app', ['ngResource', 'ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/home',
            controller: ''
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when("/signin", {
            templateUrl: 'partials/account/signin',
            controller: 'signinCtrl'
        })
});