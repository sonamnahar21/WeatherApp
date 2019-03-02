var getWeather = require('./src/getWeather');

var readline = require('readline-sync');
var cityname = readline.question("Enter City Name: ");

getWeather.currentWeather(cityname, function(response) {
  console.log(response);
});
