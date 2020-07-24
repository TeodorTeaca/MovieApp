'use strict';

function render($scope, PopularService) {
    $scope.request = function (path) {
        PopularService.getMovies(path)
            .then(function (response) {
                $scope.movies = response;
                console.log("Movies: ", $scope.movies);
            })
    }
}

angular.module('myApp.movies', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/modules', {
        templateUrl: 'modules/LatestModule/movies.view.html',
        controller: 'PopularCtrl'
    });

}]).controller('PopularCtrl', ['$scope', 'PopularService', render]);