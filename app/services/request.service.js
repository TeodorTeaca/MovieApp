angular.module('Angular.movies.service', [])
    .service('ServiceMovies', function ($http) {
        return {
            request: function (path) {
                return $http.get(`https://api.themoviedb.org/3/movie/${path}?api_key=d8bf019d0cca372bd804735f172f67e8`)
                    .then((response) => {
                        let list = response.status;
                        return response.data.results;
                    })
            }
        }
    });
