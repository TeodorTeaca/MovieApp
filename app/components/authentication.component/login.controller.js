angular.module('Angular.login', [])
    .component('login', {
        templateUrl: 'components/authentication.component/template.login.html',
        controller: function LoginController(ServiceLogin, $location) {
            let vm = this;
            let se = ServiceLogin;

            vm.authorize = function () {
                se.getRequestToken()
                    .then(function (token) {
                        window.location.assign(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8000/#!/login`);
                    })
            };

            vm.getToken = function () {
                const URL = $location.absUrl();
                const VERIFICATION_TOKEN = URL.match(/request_token=(.*)&approved=true/);
                return (VERIFICATION_TOKEN ? VERIFICATION_TOKEN[1] : null);
            }

            const NEW_TOKEN = vm.getToken();
            if (NEW_TOKEN) {
                se.getSessionId(NEW_TOKEN)
                    .then((session) => {
                        localStorage.setItem('user', session);
                        $location.path('/movies');
                    })
            }

        }

    })