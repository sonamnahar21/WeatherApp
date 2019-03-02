const expect = require('chai').expect;
var getWeather = require('../src/getWeather');

describe('Get Current Weather', () => {
  describe('For valid input',  () => {
    it('answers with `200` status', () => {
      getWeather.currentWeather('San Jose', function(response) {
        expect(response.statusCode).to.equal(200);
      });
    });
    it('answer with weather response `coord` object', () => {
       getWeather.currentWeather('San Jose', function(response) {
        let body = JSON.parse(response.body);
        expect(body.coord.lon).to.exist;
        expect(body.coord.lat).to.exist;
        expect(body.coord.lon).to.be.a('number');
        expect(body.coord.lat).to.be.a('number');
      });
    });
    it('answer with weather response `base` object', () => {
      getWeather.currentWeather('San Jose', function(response) {
       let base = JSON.parse(response.body);
        expect(base.base).to.exist;
        expect(base.base).to.be.a('string');
        expect(base.base).to.be.equals('stations');
     });
   });
  it('answer with weather response `main` object', () => {
  });
  it('answer with weather response `wind` object', () => {
  });
  });
});
