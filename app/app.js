'use strict';

angular.module('myApp', [
  'ngRoute',
  'Angular.movieList',
  'Angular.homePage',
  'Angular.componentPage',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/homePage' });
  }]);
