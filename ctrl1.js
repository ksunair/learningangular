var myApp = angular.module('app',[]);

myApp.service('userService', function ($http) {
    var URLS = {
        USER: 'http://localhost:8000/api/users'
    };
    this.getUsers = function () {
        return $http.get(URLS.USER);
    }
});

myApp.controller('GreetingController', ['$scope', '$http', 'userService', function($scope, $http, userService) {
    $http.get("http://localhost:8000/api/users").then(function(response) {
        $scope.users = response.data;
    });
    userService.getUsers()
        .then(function (result) {
            $scope.users1 = result;
        })
}]);