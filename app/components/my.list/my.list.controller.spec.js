'use strict';

describe('favouritesList module', function () {
    let $httpBackend, $rootScope;

    beforeEach(module('Angular.my.list.service'));
    beforeEach(module('Angular.my.list'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('FavouritesList controller', function () {

        it('should show validation error', inject(function ($controller) {
            const ctrl = $controller('MyListCtrl', { $scope: $rootScope });
            ctrl.requestBody({
                name: "",
                description: "",
            });
            expect(ctrl.submitEnabled).toBeFalsy();
        }));

        it('should create list', inject(function ($controller) {
            const SUCCES_RESPONSE = {
                "status_message": "The item/record was created successfully.",
                "success": true,
                "status_code": 1,
                "list_id": 5861
            };
            const ERROR_RESPONSE = {
                "status_message": "The resource you requested could not be found.",
                "status_code": 34
            }
            localStorage.setItem('user', 'test-session-id');
            const CREATE_LIST = 'https://api.themoviedb.org/3/list?api_key=8673e8c11eae0b8c433a41602fd2ddfc&session_id=test-session-id';
            $httpBackend.whenPOST(CREATE_LIST).respond(SUCCES_RESPONSE);

            const ctrl = $controller('MyListCtrl', { $scope: $rootScope });
            ctrl.requestBody({
                name: "sfdff",
                description: "dfdfddfdfg"
            });

            $httpBackend.flush();
            expect(ctrl.message).toBe('Your list has been created!');
        }));

    });
});