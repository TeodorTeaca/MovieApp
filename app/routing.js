angular.module('AngularJS')
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/movies', {
                templateUrl: 'views/movies.page.html'
            })
            .when('/login', {
                templateUrl: 'views/login.page.html'
            })
            .when('/list', {
                templateUrl: 'components/my.list/template.my.list.html',
                controller: "MyListCtrl",
                controllerAs: "$ctrl",
            })
            .otherwise({ redirectTo: '/movies' });

    }])
    .run(['$rootScope', '$location', 'ServiceLogin', function ($rootScope, $location, ServiceLogin) {
        $rootScope.$on('$routeChangeStart', function (event) {
            if (!ServiceLogin.isAuthenticated()) {
                $location.path('/login');
            }
        });
    }])
