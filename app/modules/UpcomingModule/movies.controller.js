'use strict';

function render($scope, UpcomingService) {

    $scope.request = function (path) {
        UpcomingService.getMovies(path)
            .then(function (response) {
                $scope.movies = response;
                console.log("Movies: ", $scope.movies);
            })
    }
}

angular.module('myApp.movies', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/modules', {
        templateUrl: 'modules/UpcomingModule/movies.view.html',
        controller: 'UpcomingCtrl'
    });

}]).controller('UpcomingCtrl', ['$scope', 'UpcomingService', render]);