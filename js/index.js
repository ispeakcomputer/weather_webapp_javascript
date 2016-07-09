$( document ).ready(function() {
    var ipurl = "http://ip-api.com/json";
    // Here is the geolocation stuff lat / log for next api request. No need to request user location
    $.getJSON( ipurl,function(locate){
      document.getElementById("demo").innerHTML = "<b>" + locate.city + "</b>";

        //get weather from openweathermap using info from the ip-api.com api.
        var url = 'http://api.openweathermap.org/data/2.5/weather?&lat=' + locate.lat + '&lon=' + locate.lon + '&units=imperial&APPID=a5b84f49b6412d3c42bb6f8a8a3cbef8';

         $.getJSON( url, function (data){

            console.log(new Date(data.sys.sunset));
            console.log(data.sys.sunset);
            console.log(new Date(data.sys.sunrise));

            var code = data.weather[0].id;
            var hr = (new Date()).getHours();
            console.log(data);
            //Check sunset to see if it is dark and use the night icon / day icon.
            var darkOutside = function nightOrDay(condition){
            if (hr > 18){
              //this option for night and the next for day
              return condition + "-n";
            }
            else{
            return condition + "-d";
            }
            }

            //This is where we start writing are information to the page

           //add the condition to class to choose the correct icon. variable/function at end to check for night and day
           document.getElementById("weathericon").className = "owf owf-" + darkOutside(code) ;
           //adds weather to doc
           document.getElementById("weather").innerHTML = data.weather[0].main;
           //adds temp
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
