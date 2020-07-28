angular.module('Angular.login').service('ServiceToken', function ($http) {
    return {
        request: function (key) {
            return $http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${key}`)
                .then((response) => {
                    return response.data.request_token;
                })
        }
    }
});
