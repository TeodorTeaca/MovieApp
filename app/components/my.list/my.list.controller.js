angular.module('Agular.my.list', [])
    .component('list', {
        templateUrl: 'components/my.list/template.my.list.html',
        controller: function MyListController(ServiceMyList) {
            let vm = this;
            let se = ServiceMyList;
            vm.requestBody = function (list) {
                se.request(list.name, list.description)
                    .then((res) => {
                        localStorage.setItem("list", res);
                        alert("Your list has been added!");
                    });
            };

        }

    })
