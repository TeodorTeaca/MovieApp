'use strict';

angular.module('Angular.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'authentication/login.html',
            controller: 'LoginCtrl'
        })

    }])

    .controller('LoginCtrl', ['$scope', 'ServiceToken', '$http', function ($scope, ServiceToken, $http) {
        const key = '06f99320c4d4aafa43383b3d6c8da151';

        $scope.authorize = function () {
            ServiceToken.request(key)
                .then(function (token) {
                    console.log("token: ", token);

                    window.location.assign(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8000/#!/login`);

                })

        };
    }]);

    // 1. Req a temp token 
    // 2. Redirect user to TMDB with the above token
    // 3. After the 2 stept get the verification token and call the create seesion API
    // 4. Finally call the seesion api /authentication/session/new wichtchdj retuns the seesion id
    // 5. Save the ession id or futture use