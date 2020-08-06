(function () {
    function MyListController(ServiceMyList) {
        let se = ServiceMyList;
        this.requestBody = function (list) {
            if (list.name && list.description) {
                se.request(list.name, list.description)
                    .then((res) => {
                        localStorage.setItem("list", res.data.list_id);
                        this.message = 'Your list has been created!';
                    }).catch((res) => {
                        let status_code = res.data.status_code;
                        if (status_code === 34) {
                            this.message = 'The resource you requested could not be found';
                        } else if (status_code === 7) {
                            this.message = 'Invalid API key: You must be granted a valid key';
                        } else if (res === 404) {
                            this.message = 'SESSION is not defined';
                        }
                    })
            } else {
                this.submit = false;
            }
        };
    }

    angular
        .module('Angular.my.list', ['ngRoute'])
        .controller("MyListCtrl", MyListController)
})()
