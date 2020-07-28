'use strict';

angular.module('Angular.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'authentication/login.html',
            controller: 'LoginCtrl'
        })

    }])

    .controller('LoginCtrl', ['$scope', 'ServiceToken', function ($scope, ServiceToken,) {
        const key = '06f99320c4d4aafa43383b3d6c8da151';

        $scope.authorize = function () {
            ServiceToken.request(key)
                .then(function (token) {
                    console.log("token: ", token);
                    $scope.authorize = window.location.assign(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8000/#!/login`);
                });
        }


    }]);
