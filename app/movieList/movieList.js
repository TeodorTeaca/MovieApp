'use strict';

angular.module('Angular.movieList', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/movieList', {
      templateUrl: 'movieList/movieList.html',
      controller: 'MovieListCtrl'
    });
  }])

  .controller('MovieListCtrl', ['$scope', 'Service', function ($scope, Service) {

    Service.request('popular')
      .then(function (movies) {
        $scope.popular = movies;
      })

    Service.request('upcoming')
      .then((movies) => $scope.upcoming = movies);

    Service.request('now_playing')
      .then((movies) => $scope.nowPlaying = movies);

  }]);

