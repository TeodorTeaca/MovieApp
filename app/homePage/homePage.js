'use strict';

angular.module('Angular.homePage', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/homePage', {
      templateUrl: 'homePage/homePage.html',
      controller: 'HomePageCtrl'
    });
  }])

  .controller('HomePageCtrl', [function () {

  }]);

