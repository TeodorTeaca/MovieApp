angular.module('AngularJS').controller('MovieIdController', function ($http) {

    this.getMovieId = function (movie) {

        console.log("Movie ID : " + movie.id);

        $http.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=d8bf019d0cca372bd804735f172f67e8`)
            .then(function (response) { console.log(response.data) });
    }

});