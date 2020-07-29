angular.module('Angular.movieList')
    .component('movieList', {
        templateUrl: 'components/listComponent/list.template.html',
        bindings: { path: '@' },
        controller: function ListController(Service) {
            this.$onInit = function () {
                Service.request(this.path)
                    .then((result) => this.type = result);
            };
        },
    });
