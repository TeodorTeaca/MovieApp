'use strict';

describe('List component', function () {
    let $httpBackend, $rootScope;

    beforeEach(module('Angular.movies.service'));
    beforeEach(module('Angular.movies'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('List component', function () {

        it('should request list with path', inject(function ($controller) {
            const succes = {
                length: 20
            };

            const create = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d8bf019d0cca372bd804735f172f67e8';
            $httpBackend.whenGET(create).respond(succes);

            const ctrl = $controller('ListController', { $scope: $rootScope });
            ctrl.request('/upcoming');
            $httpBackend.flush();

            expect(res.length).toBe(20);
        }));

    });
});