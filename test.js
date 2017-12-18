var http = require('http');
var express = require('express');
var app = express();

// Read Environment Parameters

var port = Number(process.env.PORT || 3102);
//var greeting = process.env.GREETING || 'Hello World!123';
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hekjsdn\n");
});
app.listen(port,function(){
	  console.log("Server running");
});


app.get('/Demo', function(req, res) { 
console.log("-Success-");
res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write("Success");
    res.end();

 });


app.get('/', function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("No Data Requested, so none is returned");
res.end();
}); 
