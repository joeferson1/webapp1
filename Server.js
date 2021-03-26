const express = require("express");
const app = express();
var weather = require("weather-js");
app.set("view engine", "ejs");
var randomWords = require('random-words');

var random = randomWords(5);


app.get("/", function (req, res) {
  weather.find({ search: "Mati , PH", degreeType: "C" },function (err, result) {
      if (err) console.log(err);
      res.render("index", {
        weather: result,
      });
    }
  );
});
app.get("/other", function (req, res) {
  res.render("other",{
    randomWord: random
  });
});
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

app.listen(3000);
