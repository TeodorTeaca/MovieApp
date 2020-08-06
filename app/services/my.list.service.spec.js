describe('create list request services', function () {

    describe('create list request services', function () {
        let createService;

        beforeEach(module('Angular.my.list.service'));

        beforeEach(inject(function ($injector) {
            createService = function () {
                return $injector.get('ServiceMyList');
            }
        }));

        it('should be defined', function () {
            let service = createService();
            expect(service).toBeTruthy();
        });
    });
});