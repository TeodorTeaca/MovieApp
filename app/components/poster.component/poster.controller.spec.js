'use strict';

describe('Angular.movies module', function () {

    beforeEach(module('Angular.movies'));

    describe('Angular.movies component', function () {

        it('should be defined', inject(function ($controller) {
            var PosterController = $controller('PosterController');
            expect(PosterController).toBeDefined();
        }));

    });
});