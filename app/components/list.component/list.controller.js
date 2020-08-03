angular.module('Angular.movies', [])
    .component('movieList', {
        templateUrl: 'components/list.component/list.template.html',
        bindings: { path: '@' },
        controller: function ListController(ServiceMovies) {
            vm = this;
            vm.$onInit = function () {
                ServiceMovies.request(this.path)
                    .then((result) => this.type = result);
            };
        },
    });
