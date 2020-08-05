angular.module('Angular.login', ['ngRoute'])
    .component('login', {
        templateUrl: 'components/authentication.component/template.login.html',
        controller: function LoginController(ServiceLogin, $location) {
            let vm = this;
            let se = ServiceLogin;

            vm.authorize = function () {
                se.getRequestToken()
                    .then(function (token) {
                        window.location.assign(`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:8000/`);
                    })
            };

            vm.getToken = function () {
                const VERIFICATION_TOKEN = $location.search();
                const TOKEN = VERIFICATION_TOKEN.request_token;
                return (TOKEN ? TOKEN : null);
            }

            const NEW_TOKEN = vm.getToken();
            if (NEW_TOKEN) {
                se.getSessionId(NEW_TOKEN)
                    .then((session) => {
                        localStorage.setItem('user', session);
                        $location.url('/movies').replace();
                    })
            }

        }

    })