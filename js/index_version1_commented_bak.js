$( document ).ready(function() {
    var ipurl = "http://ip-api.com/json";
    $.getJSON( ipurl,function(locate){
      document.getElementById("demo").innerHTML = "<b>" + locate.city + "</b>";

        var url = 'http://api.openweathermap.org/data/2.5/weather?&lat=' + locate.lat + '&lon=' + locate.lon + '&units=imperial&APPID=a5b84f49b6412d3c42bb6f8a8a3cbef8';

         $.getJSON( url, function (data){

            var code = data.weather[0].id;
            var hr = (new Date()).getHours();

                  console.log(data);
                  console.log(code);

            var darkOutside = function nightOrDay(condition){
            if (hr > 18){
              return condition + "-n";
            }
            else if (hr < 7) {
              return condition + "-n";
            }
            else{
            return condition + "-d";
            }
          };


           document.getElementById("weathericon").className = "owf owf-" + darkOutside(code);
           document.getElementById("weather").innerHTML = data.weather[0].main;
           document.getElementById("temp").innerHTML = data.main.temp + "&#176;";

         });
     });
   });
