'use strict';

angular.module('Angular.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'authentication/login.html',
            controller: 'LoginCtrl'
        })

    }])

    .controller('LoginCtrl', ['$scope', 'ServiceLogin', function ($scope, ServiceLogin) {

        $scope.authorize = function () {
            ServiceLogin.getRequestToken()
                .then(function (token) {
                    console.log("token: ", token);
                    window.location.assign(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8000/#!/login`);
                })
        };

        const getURL = window.location.href;
        const verificationToken = getURL.match(/request_token=(.*)&approved=true/);

        if (verificationToken) {
            ServiceLogin.getSessionId(verificationToken[1])
                .then((res) => {
                    localStorage.setItem('user', res.data.session_id);
                    location.replace("http://localhost:8000/#!/movies")
                    console.log(res.data);
                })
        }

        $scope.viewMovies = function () {
            if (localStorage.getItem('user')) {
                location.replace("http://localhost:8000/#!/movies")
            } else { alert("please login"); }
        }
        delete localStorage.user;
    }]);
