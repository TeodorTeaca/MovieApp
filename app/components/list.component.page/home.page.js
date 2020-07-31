'use strict';
angular.module('AngularComponentPage', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/componentPage', {
      templateUrl: 'components/list.component.page/component.page.html',
      controller: 'ComponentPageCtrl'
    });
  }])
  .controller('ComponentPageCtrl', [function () {

  }]);
