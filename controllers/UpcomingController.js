angular.module('AngularJS').controller('UpcomingController', function ($http) {

    this.generateURL = function (path) {
        const url = `https://api.themoviedb.org/3/${path}?api_key=d8bf019d0cca372bd804735f172f67e8`;
        return url;
    };

    this.pathupcoming = "movie/upcoming";

    $http.get(this.generateURL(this.pathupcoming))
        .then((response) => {
            this.upcoming = response.data.results;
            console.log("Upcoming Movie : ", this.upcoming);
        });

});