var path = require('path');
var express = require('express');
var helmet = require('helmet');
var app = express();

app.use(helmet());
var staticPath = path.resolve(__dirname, '../build');
app.use(express.static(staticPath));

var server_port = process.env.PORT || CONFIG.port;

 
app.listen(server_port, function () {
  console.log( "Listening on server_port " + server_port );
  console.log(__dirname); 
});

app.get("/", (req, res) => {

 res.sendFile(__dirname + "/build/index.html");
});

