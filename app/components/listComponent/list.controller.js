angular.module('Angular.movieList')
    .component('movieList', {
        templateUrl: 'components/listComponent/list.template.html',
        bindings: { path: '@' },
        controller: function ListController(ServiceMovies) {
            this.$onInit = function () {
                ServiceMovies.request(this.path)
                    .then((result) => this.type = result);
            };
        },
    });
