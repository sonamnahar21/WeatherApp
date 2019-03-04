const expect = require('chai').expect;
var getWeather = require('../src/getWeather');
let invalidData;

describe('Get Current Weather for Invalid Data', () => {
    invalidData = 'San Francicso';
    describe('City Name: ' +invalidData,  () => {
        it('answers with `404` status', () => {
            getWeather.currentWeather(invalidData, function(response) {
            expect(response.statusCode).to.equal(404);
            });
        });
    });
    invalidData = '$%^^^&&**';
    describe('City Name with Special Characters: ' +invalidData,  () => {
        it('answers with `404` status', () => {
            getWeather.currentWeather(invalidData, function(response) {
            expect(response.statusCode).to.equal(404);
            });
        });
    });
    invalidData = '00000';
    describe('Invalid Zip Code: ' +invalidData,  () => {
        it('answers with `404` status', () => {
            getWeather.currentWeather(invalidData, function(response) {
            expect(response.statusCode).to.equal(404);
            });
        });
    });
    invalidData = ' ';
    describe('City Name as blanck: ' +invalidData,  () => {
        it('answers with `404` status', () => {
            getWeather.currentWeather(invalidData, function(response) {
            expect(response.statusCode).to.equal(404);
            });
        });
    });
});