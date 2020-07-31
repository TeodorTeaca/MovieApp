class LoginCtrl {
    constructor(ServiceLogin) {
        this.servicelogin = ServiceLogin;
    }

    authorize() {
        this.servicelogin.getRequestToken()
            .then(function (token) {
                console.log("token: ", token);
                window.location.assign(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8000/#!/login`);
            })
    };

    viewMovies = function () {
        if (localStorage.getItem('user')) {
            location.replace("http://localhost:8000/#!/movies")
        }
        else { alert("please login"); }
    }

    $onInit() {
        const getURL = window.location.href;
        const verificationToken = getURL.match(/request_token=(.*)&approved=true/);
        if (verificationToken) {
            this.servicelogin.getSessionId(verificationToken[1])
                .then((res) => {
                    localStorage.setItem('user', res.data.session_id);
                    location.replace("http://localhost:8000/#!/movies")
                    console.log(res.data);
                })
        }
    }

}

angular
    .module('AngularLogin', [])
    .component('login', { templateUrl: 'components/authentication/login.html', controller: LoginCtrl })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login.page.html',
        })
    }])