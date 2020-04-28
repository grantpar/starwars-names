var expect = require('chai').expect;
var starwars = require('./index');

describe('starwarsnamesgrantpar', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            expect(starwars.all).to.satisfy(isArrayofStrings);
            function isArrayofStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain Luke Skywalker', function () {
            expect(starwars.all).to.include('Luke Skywalker');
        });
    });
});