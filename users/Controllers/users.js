var userControllers = angular.module('userControllers', []);

userControllers.controller('UsersCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.users=[];
        $http.get("http://localhost:8000/api/users").then(function(response) {
            $scope.users = response.data;
        });
    }]);

userControllers.controller('UserDetailsCtrl', ['$scope', '$routeParams',
    function ($scope, $routeParams){
        $scope.name = $routeParams.name;
    }]);