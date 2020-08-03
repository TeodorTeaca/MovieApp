angular.module('Angular.movies').service('ServiceList', function ($http) {
    return {
        request: function () {
            return $http.post(`https://api.themoviedb.org/3/list?api_key=d8bf019d0cca372bd804735f172f67e8`, {
                "name": "This is my awesome test list.",
                "description": "Just an awesome list dawg.",
                "language": "en"
            })
                .then((response) => {
                    return response;
                })
        }
    }
});
