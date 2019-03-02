let request = require('request');
let apiKey = '43810163e3221fb614d03d65c5a88b15';

var currentWeather = function(city,callback) {
    request.get(
        {
            url: "http://api.openweathermap.org/data/2.5/weather", 
            qs: {
                    q: city, 
                    apiKey : apiKey
                }
        },
        function(error, response, body){
            if (error || response.statusCode !== 200) {
                return callback(error || {
                    statusCode: response.statusCode
                    }
                );
              }
            return callback(response);  
        });
}

module.exports =    { currentWeather };