angular.module('Angular.movieList')
    .component('movieList', {
        templateUrl: 'listComponent/list.template.html',
        bindings: { type: '@' },
        controller: function ListController(Service) {
            this.$onInit = function () {
                Service.request(this.type)
                    .then((result) => this.type = result);
            };
        },
    });