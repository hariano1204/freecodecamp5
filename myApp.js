console.log("hello world");


let express = require('express');
let app = express();
const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});





































 module.exports = app;
