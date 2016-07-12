$( document ).ready(function() {
    var ipurl = "http://ip-api.com/json";
    // Here is the geolocation stuff lat / log for next api request. No need to request user location
    $.getJSON( ipurl,function(locate){
      document.getElementById("demo").innerHTML = "<b>" + locate.city + "</b>";

        //get weather from openweathermap using info from the ip-api.com api.
        var url = 'http://api.openweathermap.org/data/2.5/weather?&lat=' + locate.lat + '&lon=' + locate.lon + '&units=imperial&APPID=a5b84f49b6412d3c42bb6f8a8a3cbef8';

          //jam in lat/long and match weather and icons code from openweathermap API.
         $.getJSON( url, function (data){

            //get the codes that match up to owfonts to use icons that do not suck much more easily
            var code = data.weather[0].id;
            //get the hr for night and day icon matching
            var hr = (new Date()).getHours();

            //Check sunset to see if it is dark and use the night icon / day icon.
            var darkOutside = function nightOrDay(condition){
            if (hr > 18){
              //this option for night icon from 18 through 24
              return condition + "-n";
            }
            //if hr is 1 through 7 we will still return the night time icon
            else if (hr < 7) {
              return condition + "-n";
            }
            // hr 7am to 6 will now return -d on code for icon for daytime
            else{
            return condition + "-d";
            }
          };
        });
      });


            //This is where we start writing are information to the page

           //add the condition to class to choose the correct icon. variable/function at end to check for night and day
           document.getElementById("weathericon").className = "owf owf-" + darkOutside(code);
           //adds weather to doc
           document.getElementById("weather").innerHTML = data.weather[0].main;
           //adds temp
           document.getElementById("temp").innerHTML = data.main.temp + "&#176;";
         });
