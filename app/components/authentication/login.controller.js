angular.module('Angular.login')
    .component('login', {
        templateUrl: 'components/authentication/template.login.html',
        controller: class LoginController {

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

            getToken() {
                const URL = window.location.href;
                const VERIFICATION_TOKEN = URL.match(/request_token=(.*)&approved=true/);
                return (VERIFICATION_TOKEN ? VERIFICATION_TOKEN[1] : null);
            }

            $onInit() {
                const NEW_TOKEN = this.getToken();
                if (NEW_TOKEN) {
                    this.servicelogin.getSessionId(NEW_TOKEN)
                        .then((session) => {
                            localStorage.setItem('user', session);
                            window.location.assign('/#!/movies');
                        })
                }
            }
        }
    })