angular.module('myApp.movies').service('UpcomingService', function ($http) {
    return {
        getMovies: function (path) {
            return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d8bf019d0cca372bd804735f172f67e8')
                .then(function (response) {
                    console.log("Response: ", response);
                    return response.data.results;
                })
        }
    }

})