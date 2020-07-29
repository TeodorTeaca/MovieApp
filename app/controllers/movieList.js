'use strict';

angular.module('Angular.movieList', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/movies', {
      templateUrl: 'views/movieList.html',
      controller: 'MovieListCtrl'
    });
  }])

  .controller('MovieListCtrl', ['$scope', 'ServiceMovies', function ($scope, ServiceMovies) {

    ServiceMovies.request('popular')
      .then(function (movies) {
        $scope.popular = movies;
      })

    ServiceMovies.request('upcoming')
      .then((movies) => $scope.upcoming = movies);

    ServiceMovies.request('now_playing')
      .then((movies) => $scope.nowPlaying = movies);

  }]);

