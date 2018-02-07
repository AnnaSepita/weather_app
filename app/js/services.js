'use strict';
/* Services */
angular.module('openWeatherApp.services', ['ngResource'])
  .value('version', '0.1.6')
  .value('exampleLocations',['Aberporth','Armagh','Ballypatrick','Bradford','Braemar','Camborne','Cambridge','Cardiff','Chivenor','Durham','Heathrow, GB','Hurn','Lerwick','Leuchars','Lowestoft','Manston','Oxford, GB','Paisley','Ringway','Shawbury','Sheffield','Southampton','Stornoway, GB','Valley','Waddington','Whitby','Wick','Yeovilton'])
  // Storm "Xaver" special locations
  .value('stormLocations',['Sylt','St. Peter-Ording','Husum','Bremerhaven','Hamburg','Kiel','Lübeck'])

  .factory('openWeatherMap', function($resource) {
    var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';
    return $resource(apiBaseUrl + ':path/:subPath?q=:location',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }
      }
    )
  });
