angular.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/movies', {
        templateUrl: 'views/movie.list.html',
    })
        .otherwise({ redirectTo: '/login' });
}]);