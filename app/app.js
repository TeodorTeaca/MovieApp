'use strict';

angular.module('AngularJS', [
  'ngRoute',
  'Angular.movieList',
  'Angular.homePage',
  'Angular.componentPage'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/homePage' });
  }]);
