$(document).ready(function () {
          $("button").click(function(){
          var city = $("#user-city").val();
       console.log(city);
       $("#city-name").html(city);
  var apiKey = 'e83b3c4c08285bf87b99f9bbc0abe3f0';
  var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;

   
//.getJSON solution
    $.getJSON(weatherUrl, function(response) {
        console.log('Temp: ' + response.main.temp);
        console.log('Humidity: ' + response.main.humidity);
        console.log('Wind Speed: ' + response.wind.speed);
          $('#weather-output').append("<p class = 'data'> The temp is: " + response.main.temp + "</p>");
          $('#weather-output').append("<p class = 'data'> The humidity is: " + response.main.humidity + "</p>");
          $('#weather-output').append("<p class = 'data'> The wind speed is: " + response.wind.speed + "</p>");
//       },
    
    });
  
            
//.ajax solution            
//     $.ajax({
//       url: weatherUrl,
//       type: "GET",
//       success: function (response){
//         console.log('Temp: ' + response.main.temp);
//         console.log('Humidity: ' + response.main.humidity);
//         console.log('Wind Speed: ' + response.wind.speed);
        

//         $('#weather-output').append("<p class = 'data'> The temp is: " + response.main.temp + "</p>");
//         $('#weather-output').append("<p class = 'data'> The humidity is: " + response.main.humidity + "</p>");
//         $('#weather-output').append("<p class = 'data'> The wind speed is: " + response.wind.speed + "</p>");
//       },
//       error: function (response) {
//         console.log(response);
//       }
//     });
  });
});

