$(document).ready(function() {
  var city = "Cupertino"
  var weatherDescription = "Something"
  $.get("http://ipinfo.io", function(response) {
    console.log(response.city);
    $('#city').html(response.city+ ", " + response.region);
    city = response.city
  }, "jsonp");
  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q={' + city + '}';
  $.get(weatherApiUrl, function(response) {
    console.log(response.wind.speed);
    weatherDescription = response.weather[0].description;
    var temperature = response.main.temp * 9 / 5 - 459.67;
    $('#sky').html(weatherDescription);
    $('#wind').html(response.wind.speed + " kts");
    $('#temp').html(temperature.toFixed(2) + " F");
    $('#image').append("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
  }, "jsonp");


  


});