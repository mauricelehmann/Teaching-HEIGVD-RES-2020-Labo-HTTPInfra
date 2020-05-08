var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();

//Avec GET / HTTP/1.0
app.get('/api/students', function(req, res){
	res.send(chance.name());
});

app.get('/test', function(req, res){
	res.send("Test is working! </br>");
});

app.listen(3333, function(){
	console.log("Accepting HTTP req. on port 3333")
})
