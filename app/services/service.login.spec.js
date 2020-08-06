describe('login services', function () {

    describe('login service', function () {
        let createService;

        beforeEach(module('Angular.movies.service'));

        beforeEach(inject(function ($injector) {
            createService = function () {
                return $injector.get('ServiceMovies');
            }
        }));

        it('should be defined', function () {
            let service = createService();
            expect(service).toBeTruthy();
        });
    });
});