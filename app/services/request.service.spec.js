describe('movies request services', function () {

    describe('movies request services', function () {
        let $httpBackend, $rootScope, createService;

        beforeEach(module('Angular.login.serivce'));

        beforeEach(inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            $rootScope = $injector.get('$rootScope');

            createService = function () {
                return $injector.get('ServiceLogin');
            }
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });


        it('should be defined', function () {
            let service = createService();
            expect(service).toBeTruthy();
        });

        it('should be 200 request status', function () {

            const succes = {
                "status": 200
            };

            const getList = 'https://api.themoviedb.org/3/movie/upcoming?api_key=8673e8c11eae0b8c433a41602fd2ddfc';
            $httpBackend.whenGET(getList).respond(succes);
            $httpBackend.flush();

            let service = createService();
            service.request('/upcoming');

            expect(list).toBe(200);
        });

    });
});