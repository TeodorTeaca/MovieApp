'use strict';

function render($scope, NowPlayingService) {
    $scope.request = function (path) {
        NowPlayingService.getMovies(path)
            .then(function (response) {
                $scope.movies = response;
                console.log("Movies: ", $scope.movies);
            })
    }
}

angular.module('myApp.movies', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/modules', {
        templateUrl: 'modules/NowPlayingModule/movies.view.html',
        controller: 'nowPlayingCtrl'
    });

}]).controller('nowPlayingCtrl', ['$scope', 'NowPlayingService', render]);