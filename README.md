# WeatherBuddy 

<a href="https://github.com/ispeakcomputer/weather_webapp_javascript/blob/master/images/image.png" title="app image"><img src="https://github.com/ispeakcomputer/weather_webapp_javascript/blob/master/images/image.png" width="600"></a>

A webapp built to display the current weather in your area.

This webapp was built in a way that the browser doesn't need your permission to send location information. 

It instead uses IP-API to get your latitude and longitude settings for the current public IP you are using. 

It takes this information and feeds it into the OpenWeatherMap API

After this is done the data is paired with a OwFont Weather Icon for either  Night/Day icons depending on 
the time of day. 

## Motivation

This app was built so that it could be used with a smart mirror project.

## Modules

 Material Design Lite
 Jquery 
 OWFont
 

## Installation

Serve with Heroku like any other HTML / Javascript app. The package.json file has been added to this repo 
added to allow to run on Heroku as 'static site'. The package.json tricks Heroku into thinking this is a 
Node.js app and depencies are added to serve static files 

If running on your webserver just put all files in the public folder.

to run locally download the repo move into the repo directory and click to open with a browser the index.html file
