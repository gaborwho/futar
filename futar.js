'use strict';

const jsonp = require('jsonp');
const url = 'http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/arrivals-and-departures-for-stop.json?stopId=BKK_L008084';

jsonp(url, {}, function (error, data) {
  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }
});

