//jshint esversion: 6
const express = require ("express");
const https = require("https");


const app = express();


app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=6c46b1f94ed08c95ba07af56d06d3e58&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const main = weatherData.weather[0].main;
      const wind = weatherData.wind.speed;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<h1> The temperature in Tunis is " + temp + " degree </h1>");
      res.write("<p>The weather is currently " + main + " </p>");
      res.write("<p>Current wind speed in Tunis is " + wind + "</p>");
      res.write("<img src= " + imageURL + ">");
      res.send();
      console.log(weatherData);
    });
  });
});















app.listen(3000, function(){
  console.log("server started on port 3000");
});
