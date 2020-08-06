(function () {

    function ListController(ServiceMovies) {
        let se = ServiceMovies;
        let vm = this;
        vm.$onInit = function () {
            se.request(vm.path)
                .then((res) => this.type = res);
        };
    }

    angular.module('Angular.movies', ['ngRoute'])
        .controller('ListController', ListController)
        .component('movieList', {
            templateUrl: 'components/list.component/list.template.html',
            bindings: { path: '@' },
            controller: 'ListController'

        })
})()