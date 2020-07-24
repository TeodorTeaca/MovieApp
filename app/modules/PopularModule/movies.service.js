angular.module('myApp.movies').service('PopularService', function ($http) {
    return {
        getMovies: function (path) {
            return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fc298428bb77d2a10fb5e0bc411eb836')
                .then(function (response) {
                    console.log("Response: ", response);
                    return response.data.results;
                })
        }
    }

})