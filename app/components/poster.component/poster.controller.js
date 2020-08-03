angular.module('Angular.movies')
    .component('poster', {
        templateUrl: 'components/poster.component/poster.template.html',
        bindings: {
            url: "@"
        },
        controller: function PosterController() {
            vm = this;
            vm.$onInit = function () {
            }
        }
    })
