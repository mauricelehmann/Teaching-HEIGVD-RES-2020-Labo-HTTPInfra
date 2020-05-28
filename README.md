# Teaching-HEIGVD-RES-2020-Labo-HTTPInfra
# Documentation

## Objectifs

L'objectif de ce labo était de mettre en place **trois** serveurs, dockérisé, afin d'heberger une application web. L'idée est de séparer le contenu statique au contenu dynamique, et de passer par un reverse proxy pour accèdeder à l'application.
* Le premier serveur : ***apache-static*** , permet d'afficher du contenu HTML statique, à l'aide de **Bootstrap**.
* Le deuxième serveur : ***apache-dynamic***, fait tourner un serveur **Node.js**, et fournis une API qui permet de générer des noms, prénom, date de naissances. via une librairie Javascript, **Express**.
* Le troisième serveur : ***reverse-proxy*** , s'occupe de rediriger les requêtes HTTP entrantes sur les bons serveurs.

<img src="images_documentation/vm_diagram2.png" alt="drawing" width="520"/>


## apache-static

Pour apache-static, on utilise l'image php:5.6-apache.

Dockerfile :
```
FROM php:5.6-apache

RUN apt-get update && \
	apt-get install -y nano

COPY content/ /var/www/html/
```
On copie également tous le contenu de **content/** dans **/var/www/html** de la VM.

La configuration apache se trouve dans **/etc/apache2/sites-available/** :

```
<VirtualHost *:80>
	ServerAdmin webmaster@localhost
	DocumentRoot /var/www/html

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Le contenu de /var/www/html contient une simple page d'acceuil statique, utilisant Bootstrap.

On y ajoute également un script,(docker-images\apache-php-image\content\js\,**students.js**):
```javascript
$(function () {
        console.log("Debut script students ok");
        function loadStudents(){
                $.getJSON("/api/students/api/students/", function( students ){
                        console.log("stud = " + students);
                        if(students.length > 0){
                                $(".student_title").text(students[0].firstName + " " + students[0].lastName);
                                                }
                                        });
                };
        loadStudents();
});
```

Ce script permet de récupérer des données via l'API que **apache-dynamic** fourni. On récupère ses données avec Ajax, puis utilisons JQuery pour modifier le titre de la page principale de index.html en affichant un nom récupéré des données.


## apache-dynamic

Le serveur apache-static fournit une API assez basique.
 - /api/students/ : retourne une liste de personnes (fictives) en format JSON.
 Le format est le suivant :
 ```JSON
[
	{
		"firstName": "",
		"lastName": "",
		"birthday": ""
	}
]
```
Les données sont aléatoires, générée par **Express.js**.


L'API fonctionne avec **Node.js**, qui se lance automatiquement au lancement de l'image Docker.
Pour ce faire, la Dockerfile comporte les lignes suivantes :

```Dockerfile

FROM node:6.0

RUN apt-get update && \
	apt-get install -y nano

COPY src /opt/app

CMD ["node", "/opt/app/index.js"]

```

N.B : la version 6.0 de Node est nécessaire pour utiliser **Express.js**. Sans quoi on se retrouve avec l'erreur suivante : 
```( SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode)```

Le serveur Node.js est décrit de la manière suivante, et écoute sur le port **3333** :

```
var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();


//Avec GET / HTTP/1.0
app.get('/api/students/', function(req, res){
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
				year: birthday
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
```





## Step 3: Reverse proxy with apache (static configuration)


## Step 4: AJAX requests with JQuery

## Step 5: Dynamic reverse proxy configuration
