/* Used Open Weather API to get current weather */
var appid = "e29e06b21a26b8375cb8b5da5936c8ba"; // OpenWeatherMap API Key
var curretemp, currunits = 'C';

$(document).ready(function() {
  $('#weather-info').hide();
  $('#error-message').hide();
  getCurrentLocation(); 
  
  $('#units').on('click',function(){
    if (currunits == 'C') {
      currunits = 'F';
      var f = currtemp * 9 / 5 + 32;
      $('#temp').text(Math.round(f) + '\xB0');
      $('#units').text(currunits);
      currtemp = Math.round(f);
    } else {
      currunits = 'C';
      var c = (currtemp - 32) * 5 / 9;
      $('#temp').text(Math.round(c) + '\xB0');
      $('#units').text(currunits);
      currtemp = Math.round(c);
    }
  });
});

function getCurrentLocation() {
    if (navigator.geolocation) { //check geolocation available     
    $('#weather-info').show();    navigator.geolocation.getCurrentPosition(function(position) {         
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        
        getWeather(lat, lon);
      });
    } else {
       // display message that geolocation is not available 
       $('#error-message').show();       
    }    
}

function getWeather(lat, lon) {  
  $.ajax({
			type: 'POST',
			url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + appid + '&units=metric',			
			dataType: 'json',
			success: function(data) {             
        currtemp = Math.round(data.main.temp);
        currunits = 'C';
        $('#temp').text(Math.round(data.main.temp) + '\xB0');
        $('#units').text(currunits);
        $('#icon').html('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png" />'); 
        $('#description').text(data.weather[0].description);    
        $('#location').text(data.name + ', ' + data.sys.country);
      },
			error: function(xhr, textStatus, errorThrown) { 
        //console.log(xhr. textStatus, errotThrown);
      }
		});
}
