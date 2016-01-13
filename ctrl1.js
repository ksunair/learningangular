var myApp = angular.module('app',[]);

myApp.controller('GreetingController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://localhost:8000/api/users").then(function(response) {
        $scope.users = response.data;
    });
}]);