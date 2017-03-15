/*
  MapTheDebris.js
  Problem: Return a new array that transforms the element's average altitude into their orbital periods.
  The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
  You can read about orbital periods on wikipedia.
  The values should be rounded to the nearest whole number. The body being orbited is Earth.
  The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
  
  by: roldeguz
  date: 15-March-2017
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;  
  var pi = 2 * Math.PI;
  
  var orbitalPeriods = [];
  
  arr.forEach(function(s) {
    var a3 = Math.pow(s.avgAlt + earthRadius, 3);
    var a3GM = Math.sqrt(a3 / GM);
    var orbitalPeriod = Math.round(pi * a3GM);
    
    orbitalPeriods.push({name: s.name, orbitalPeriod: orbitalPeriod});
  });
  
  return orbitalPeriods;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
