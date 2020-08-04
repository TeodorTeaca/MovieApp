const SESSION = localStorage.getItem("user");
angular.module('Agular.my.list')
    .service('ServiceMyList', function ($http) {
        return {
            request: function (listName, listDescription) {
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
