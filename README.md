# Teaching-HEIGVD-RES-2020-Labo-HTTPInfra
# Documentation

## Objectifs

L'objectif de ce labo était de mettre en place **trois** serveurs, dockérisé, afin d'heberger une application web. L'idée est de séparer le contenu statique au contenu dynamique, et de passer par un reverse proxy pour accèdeder à l'application.
* Le premier serveur : ***apache-static*** , permet d'afficher du contenu HTML statique, à l'aide de **Bootstrap**.
* Le deuxième serveur : ***apache-dynamic***, fait tourner un serveur **Node.js**, et fournis une API qui permet de générer des noms, prénom, date de naissances. via une librairie Javascript, **Express**.
* Le troisième serveur : ***reverse-proxy*** , s'occupe de rediriger les requêtes HTTP entrantes sur les bons serveurs.

<img src="images_documentation/vm_diagram.png" alt="drawing" width="520"/>


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


## Step 2: Dynamic HTTP server with express.js


## Step 3: Reverse proxy with apache (static configuration)


## Step 4: AJAX requests with JQuery

## Step 5: Dynamic reverse proxy configuration
