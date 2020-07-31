'use strict';

angular.module('AngularMovieList', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {

    if (localStorage.getItem('user')) {
      $routeProvider.when('/movies', {
        templateUrl: 'views/movie.list.html',
        controller: 'MovieListCtrl'
      });
    }
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

