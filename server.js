var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, '/build');
app.use(express.static(staticPath));

app.get("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
  console.log('listening');
});