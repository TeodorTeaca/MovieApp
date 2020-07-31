angular.module('AngularComponentPage')
    .component('poster', {
        templateUrl: 'components/poster.component/poster.template.html',
        bindings: {
            url: "@"
        },
        controller: function PosterController() {
            this.$onInit = function () {
            }
        }

    })
