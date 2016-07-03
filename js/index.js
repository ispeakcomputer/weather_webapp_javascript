$( document ).ready(function() {
    // Here is the geolocation stufsf
    $.getJSON("http://ip-api.com/json",function(locate){
      console.log(locate.city);
      console.log(locate);
      
      document.getElementById("demo").innerHTML = "<b>" + locate.city + "</b>";
   
         //weather api stuff here.
         var latitude = locate.lat;
          console.log(latitude);
         var longitude = locate.lon;
          console.log(longitude);
     
        var url = 'http://api.openweathermap.org/data/2.5/weather?&lat=' + latitude + '&lon=' + longitude + '&units=imperial&APPID=a5b84f49b6412d3c42bb6f8a8a3cbef8';
        
       
      
         $.getJSON( url, function (data){ 
          console.log(data.main.temp);
           
            console.log(data);
           //adds weather to doc
           document.getElementById("weather").innerHTML = data.weather[0].main;
           //adds temp. still needs to be converted.add conversion.
           document.getElementById("temp").innerHTML = data.main.temp + "&#176;";
            });
      
      //google maps stuff
           //wundermap overlay
           
           //underg key :63bd21da7558e560
        //api request :http://api.wunderground.com/api/63bd21da7558e560/animatedsatellite/image.gif?lat=39.7388&lon=-104.4083&delay=25&num=8&radius=100&width=500&height=380&format=gif&key=sat_ir4&borders=0&smooth=1&basemap=0&timelabel=0
           
     
    });
  // document ready ending 
  });

/* example with the API key  http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={a5b84f49b6412d3c42bb6f8a8a3cbef8} 

Example with lan/log 

api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon} 

Example using zip code

api.openweathermap.org/data/2.5/weather?zip={zip code},{country code} 

*/

/* 
1.start by fully loading page and them pulling the lan/log coords and store then in a var 

add all the coordinates to every API that needs them 

2.If no lang/lon coords are allowed then ask for a zip code

3.enter that information into a JSON request.
*/