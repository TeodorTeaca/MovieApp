const API_KEY = '8673e8c11eae0b8c433a41602fd2ddfc';
angular.module('Angular.login.serivce', [])
    .service('ServiceLogin', function ($http) {
        return {
            getRequestToken: function () {
                return $http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`)
                    .then((response) => {
                        return response.data.request_token;
                    })
            },

            getSessionId: function (verificationToken) {
                return $http.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`, { request_token: verificationToken })
                    .then((response) => { return response.data.session_id })
            },

            isAuthenticated: function () {
                const SESSION = localStorage.getItem('user');
                if (SESSION == null) {
                    return false;
                } else {
                    return true;
                }

            }

        };
    });

