'use strict';

describe('My list module', function () {
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

    describe('My list controller', function () {

        it('should show validation error', inject(function ($controller) {
            const ctrl = $controller('MyListCtrl', { $scope: $rootScope });
            ctrl.requestBody({
                name: "",
                description: "",
            });
            expect(ctrl.submit).toBeFalsy();
        }));

        it('should create list', inject(function ($controller) {
            const succes = {
                "status_message": "The item/record was created successfully.",
                "success": true,
                "status_code": 1,
                "list_id": 5861
            };
            localStorage.setItem('user', 'test-session-id');
            const create = 'https://api.themoviedb.org/3/list?api_key=8673e8c11eae0b8c433a41602fd2ddfc&session_id=test-session-id';
            $httpBackend.whenPOST(create).respond(succes);
            const ctrl = $controller('MyListCtrl', { $scope: $rootScope });
            ctrl.requestBody({
                name: "name",
                description: "description"
            });
            $httpBackend.flush();
            expect(ctrl.message).toBe('Your list has been created!');
        }));


        it('should not create list', inject(function ($controller) {
            const ctrl = $controller('MyListCtrl', { $scope: $rootScope });
            ctrl.requestBody({
                name: "name",
                description: ""
            });
            expect(ctrl.submit).toBeFalsy();
        }));

        it('should show resource requested could not be found', inject(function ($controller) {
            const errorResponse = {
                status_code: 34,
                status_message: "The resource you requested could not be found."
            }
            const create = 'https://api.themoviedb.org/3/list?api_key=8673e8c11eae0b8c433a41602fd2ddfc';
            $httpBackend.whenPOST(create).respond(errorResponse);
            const ctrl = $controller('MyListCtrl', { $scope: $rootScope });
            ctrl.requestBody({
                name: "name",
                description: "description"
            });
            $httpBackend.flush();
            expect(ctrl.message).toBe('The resource you requested could not be found');
        }));


        it('should show Invalid API key', inject(function ($controller) {
            const errorResponseKey = {
                status_code: 7,
                status_message: "Invalid API key: You must be granted a valid key.",
                success: false
            }
            const request = 'https://api.themoviedb.org/3/list';
            $httpBackend.whenPOST(request).respond(errorResponseKey);
            const ctrl = $controller('MyListCtrl', { $scope: $rootScope });
            ctrl.requestBody({
                name: "name",
                description: "description"
            });
            $httpBackend.flush();
            expect(ctrl.message).toBe('Invalid API key: You must be granted a valid key');
        }));

    });
});