angular.module('Angular.movieList')
    .component('poster', {
        templateUrl: 'components/posterComponent/poster.template.html',
        bindings: {
            url: "@"
        },
        controller: function PosterController() {
            this.$onInit = function () {
            }
        }

    })
