angular.module('AngularMovieList')
    .component('movieList', {
        templateUrl: 'components/list.component/list.template.html',
        bindings: { path: '@' },
        controller: function ListController(ServiceMovies) {
            this.$onInit = function () {
                ServiceMovies.request(this.path)
                    .then((result) => this.type = result);
            };
        },
    });
