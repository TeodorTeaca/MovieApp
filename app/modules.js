'use strict';
angular.module('AngularJS', [
  'ngRoute',
  'AngularMovieList',
  'AngularComponentPage',
  'AngularLogin'
])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/login' });
  }]);
