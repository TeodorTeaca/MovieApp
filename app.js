"use strict"
angular.module('MovieApp', []);

angular.module('MovieApp').controller('FetchController', [function () {
    this.nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=d8bf019d0cca372bd804735f172f67e8";

    this.getNowPlayingMovie = function () {
        fetch(this.nowPlayingURL)
            .then((res) => res.json())
            .then((data) => this.getData(data.results))
            .catch((error) => { console.log(error); });
    }

    this.getData = function (data) {
        this.arrayObjects = data;
        console.log(data);
    }

}])


angular.module('MovieApp').controller('UpcomingController', [function () {
    this.upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=d8bf019d0cca372bd804735f172f67e8";

    this.getNowPlayingMovie = function () {
        fetch(this.upcomingURL)
            .then((res) => res.json())
            .then((data) => this.getUpcoming(data.results))
            .catch((error) => { console.log(error); });
    }

    this.getUpcoming = function (data) {
        this.arrayObjects = data;
        console.log(data);
    }

}])
