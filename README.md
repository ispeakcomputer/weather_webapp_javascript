# WeatherBuddy 

<a href="https://github.com/ispeakcomputer/weather_webapp_javascript/blob/master/images/image.png" title="app image"><img src="https://github.com/ispeakcomputer/weather_webapp_javascript/blob/master/images/image.png" width="600"></a>

See a Demo Here: http://ispeakcomputer.com/weatherapp/

A webapp built to display the current weather in your area.
This webapp was built in a way that the browser doesn't need your permission to send location information. It instead uses IP-API to get 
your latitude and longitude settings for the current public IP you are using. It takes this information and feeds it into the OpenWeatherMap API
.After this is done the data is paired with a OwFont Weather Icon from the Owfont kit. Simple code to tell the app to use Night/Day icons depending on 
the time of day. 

# Motivation

This app was built in order has a quick way to always know the weather. It was built in a way that it could be used with a smart mirror project.

# Modules

 Material Design Lite
 Jquery 
 OWFont
 
 ## Package.json added to allow Heroku 'static site'
 
 The package.json tricks Heroku into thinking this is a Node.js app and 
 depencies are added to serve static files 
 
