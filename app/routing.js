angular.module('AngularJS')
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/movies', {
                templateUrl: 'views/movies.page.html',
            })
            .when('/login', {
                templateUrl: 'views/login.page.html',
            })
            .otherwise({ redirectTo: '/login' });

    }])
    .run(['$rootScope', '$location', 'ServiceLogin', function ($rootScope, $location, ServiceLogin) {
        $rootScope.$on('$routeChangeStart', function (event) {
            if (ServiceLogin.isAuthenticated()) {
                $location.path('/movies');
            } else {
                $location.path('/login');
            }
        });

    }])
