var path = require('path');
var express = require('express');
var helmet = require('helmet');
var app = express();

app.use(helmet());
var staticPath = path.resolve(__dirname, '/build');
app.use(express.static(staticPath));

app.get("/", (req, res) => {

 res.sendFile(__dirname + "/build/index.html");
});

app.listen(8080, '127.0.0.1', function() {
  console.log('listening');
});