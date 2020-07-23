angular.module('AngularJS').controller('ImageController', function ($http) {

    this.renderImage = function (movie) {
        // console.log(movie.poster_path);
        return imageURL + movie.poster_path;
    };

});
