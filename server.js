var path = require('path');
var express = require('express');
var helmet = require('helmet');
var app = express();

app.use(helmet());
var staticPath = path.resolve(__dirname, '/build');
app.use(express.static(staticPath));

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
});

app.get("/", (req, res) => {

 res.sendFile(__dirname + "/build/index.html");
});

