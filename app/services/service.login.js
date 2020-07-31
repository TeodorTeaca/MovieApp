const API_KEY = '06f99320c4d4aafa43383b3d6c8da151';

angular.module('AngularLogin').service('ServiceLogin', function ($http) {
    return {
        getRequestToken: function () {
            return $http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`)
                .then((response) => {
                    return response.data.request_token;
                })
        },

        getSessionId: function (verificationToken) {
            return $http.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`, { request_token: verificationToken })
                .then((response) => { return response })
        }

    };
});

