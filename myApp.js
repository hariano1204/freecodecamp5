console.log("hello world");


let express = require('express');
let app = express();
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use("/public", express.static(__dirname + "/public"));

const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

// Nueva ruta que devuelve JSON
app.get("/json", function (req, res) {
  let response = { "message": "Hello json" };

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  }

  res.json(response);
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);


































 module.exports = app;
