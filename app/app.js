'use strict';

const AngularJSMovieApp = angular.module('AngularJSMovieApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

AngularJSMovieApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({ redirectTo: '/view1' });
}]);
