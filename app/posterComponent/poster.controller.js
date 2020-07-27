angular.module('Angular.movieList')
    .component('poster', {
        templateUrl: 'posterComponent/poster.template.html',
        bindings: {
            url: "@"
        },
        controller: function PosterController() {
            // $ctrl = this;
            this.$onInit = function () {
                // console.log(this.poster);
            }
        }

    })
