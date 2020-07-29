'use strict';

angular.module('Angular.componentPage', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/componentPage', {
      templateUrl: 'components/listComponentPage/componentPage.html',
      controller: 'ComponentPageCtrl'
    });
  }])

  .controller('ComponentPageCtrl', [function () {

  }]);
