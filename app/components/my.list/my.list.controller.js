(function () {
    function MyListController(ServiceMyList) {
        let se = ServiceMyList;

        this.requestBody = function (list) {
            if (list.name && list.description) {
                se.request(list.name, list.description)
                    .then((res) => {
                        localStorage.setItem("list", res);
                        this.message = 'Your list has been created!';
                        alert("ADDED");
                    }).catch((res) => {
                        this.message = res.data.status_message;
                    })
            } else {
                this.submitEnabled = false;
            }
        };
    }

    angular
        .module('Angular.my.list', ['ngRoute'])
        .controller("MyListCtrl", MyListController)
})()


























// angular.module('Angular.my.list', ['ngRoute'])
//     .component('list', {
//         templateUrl: 'components/my.list/template.my.list.html',
//         controller: function MyListController(ServiceMyList) {
//             let vm = this;
//             let se = ServiceMyList;
//             vm.requestBody = function (list) {
//                 if (list.name && list.description) {
//                     se.request(list.name, list.description)
//                         .then((res) => {
//                             localStorage.setItem("list", res);
//                             vm.message = 'Your list has been created!';
//                         }).catch((res) => {
//                             vm.message = res.data.status_message;
//                         })
//                 } else {
//                     vm.submitEnabled = false;
//                 }
//             };
//         }
//     })