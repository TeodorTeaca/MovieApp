angular.module('AngularJS').controller('NowPlayingController', function ($http) {

    this.generateURL = function (path) {
        const url = `https://api.themoviedb.org/3/${path}?api_key=d8bf019d0cca372bd804735f172f67e8`;
        return url;
    };

    this.pathplaying = "movie/now_playing";

    $http.get(this.generateURL(this.pathplaying))
        .then((response) => {
            this.nowPlaying = response.data.results;
            console.log("Now Playing Movie : ", this.nowPlaying);
        });
});