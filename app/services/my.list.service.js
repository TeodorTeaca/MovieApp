
angular.module('Angular.my.list.service', [])
    .service('ServiceMyList', function ($http) {
        return {
            request: function (listName, listDescription) {
                const SESSION = localStorage.getItem("user");
                requestBody = {
                    name: listName,
                    description: listDescription,
                    language: "en",
                };
                return $http.post(`https://api.themoviedb.org/3/list?api_key=${API_KEY}&session_id=${SESSION}`, requestBody)
                    .then((response) => {
                        return response.data.list_id;
                    })
            }
        }

    });
