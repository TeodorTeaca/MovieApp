'use strict';
angular.module('AngularComponentPage', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/componentPage', {
      templateUrl: 'components/list.component.page/componentPage.html',
      controller: 'ComponentPageCtrl'
    });
  }])
  .controller('ComponentPageCtrl', [function () {

  }]);
