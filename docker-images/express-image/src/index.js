var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();


app.get('/', function(req, res) {
	res.send("no path here , just / ");
});

//Avec GET / HTTP/1.0
app.get('/api/students', function(req, res){
	var students = [];
	for (var i = 0; i < 10; i++) {
		var gender = chance.gender();
		var birthday = chance.year({
			min: 1915,
			max: 2020
		})
		students.push({
			firstName: chance.first({
				gender : gender
			}),
			lastName : chance.last(),
			birthday: chance.birthday({
				year: birthday;
			})
		});
	}
	res.send(students);
});

app.get('/test', function(req, res){
	res.send("Test is working! </br>");
});

app.listen(3333, function(){
	console.log("Accepting HTTP req. on port 3333")
})
