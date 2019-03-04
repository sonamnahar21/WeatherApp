const expect = require('chai').expect;
var getWeather = require('../src/getWeather');
const inputCity = 'San Franscisco';

describe('Get Current Weather', () => {
  describe('For valid City Name: ' +inputCity,  () => {
    it('answers with `200` status', () => {
      getWeather.currentWeather(inputCity, function(response) {
        expect(response.statusCode).to.equal(200);
      });
    });
    it('answer with weather response `coord` object', () => {
       getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.coord.lon).to.exist;
        expect(body.coord.lat).to.exist;
        expect(body.coord.lon).to.be.a('number');
        expect(body.coord.lat).to.be.a('number');
      });
    });
    it('answer with weather response `base` object', () => {
        getWeather.currentWeather(inputCity, function(response) {
        let base = JSON.parse(response.body);
          expect(base.base).to.exist;
          expect(base.base).to.be.a('string');
          expect(base.base).to.be.equals('stations');
      });
    });
    it('answer with weather response `id` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
       let body = JSON.parse(response.body);
        expect(body.id).to.exist;
        expect(body.id).to.be.a('number');
      });
    });
    it('answer with weather response `name` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.name).to.exist;
        expect(body.name).to.be.a('string');
        expect(body.name).to.be.equal(inputCity);
      });
    });
    it('answer with weather response `COD` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.cod).to.exist;
        expect(body.cod).to.be.a('number');
        expect(body.cod).to.be.equal(200);
      });
    });
    it('answer with weather response `main` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.main.temp).to.exist;
        expect(body.main.temp).to.be.a('number');
        expect(body.main.pressure).to.exist;
        expect(body.main.pressure).to.be.a('number');
        expect(body.main.humidity).to.exist;
        expect(body.main.humidity).to.be.a('number');
        expect(body.main.temp_min).to.exist;
        expect(body.main.temp_min).to.be.a('number');
        expect(body.main.temp_max).to.exist;
        expect(body.main.temp_max).to.be.a('number');
      });
    });
    it('answer with weather response `weather` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.weather[0].id).to.exist;
        expect(body.weather[0].id).to.be.a('number');
        expect(body.weather[0].main).to.exist;
        expect(body.weather[0].main).to.be.a('string');
        expect(body.weather[0].description).to.exist;
        expect(body.weather[0].description).to.be.a('string');
        expect(body.weather[0].icon).to.exist;
        expect(body.weather[0].icon).to.be.a('string');
      });
    });
    it('answer with weather response `wind` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.wind.speed).to.exist;
        expect(body.wind.speed).to.be.a('number');
        expect(body.wind.deg).to.exist;
        expect(body.wind.deg).to.be.a('number');
      });
    });
    it('answer with weather response `wind` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.clouds.all).to.exist;
        expect(body.clouds.all).to.be.a('number');
      });
    });
    it('answer with weather response `dt` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.dt).to.exist;
        expect(body.dt).to.be.a('number');
      });
    });
    it('answer with weather response `sys` object', () => {
      getWeather.currentWeather(inputCity, function(response) {
        let body = JSON.parse(response.body);
        expect(body.sys.message).to.exist;
        expect(body.sys.message).to.be.a('number');
        expect(body.sys.country).to.exist;
        expect(body.sys.country).to.be.a('string');
        expect(body.sys.sunrise).to.exist;
        expect(body.sys.sunrise).to.be.a('number');
        expect(body.sys.sunset).to.exist;
        expect(body.sys.sunset).to.be.a('number');
      });
    });
  });
});
