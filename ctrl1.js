angular.module('app', [
        'ngRoute',
        'userControllers'
    ])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/users', {
                templateUrl: 'users/templates/users.html',
                controller: 'UsersCtrl'
            }).
            when('/users/:name', {
                templateUrl: 'users/templates/userdetails.html',
                controller: 'UserDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/users'
            });
        }
    ]);
