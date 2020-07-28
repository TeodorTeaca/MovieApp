angular.module('Angular.movieList')
    .component('poster', {
        templateUrl: 'posterComponent/poster.template.html',
        bindings: {
            url: "@"
        },
        controller: function PosterController() {
            this.$onInit = function () {
            }
        }

    })
