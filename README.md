# Teaching-HEIGVD-RES-2020-Labo-HTTPInfra
# Documentation

## Objectifs

L'objectif de ce labo était de mettre en place **trois** serveurs, dockérisé, afin d'heberger une application web. L'idée est de séparer le contenu statique au contenu dynamique, et de passer par un reverse proxy pour accèdeder à l'application.
* Le premier serveur : apache-static , permet d'afficher du contenu HTML statique, à l'aide de **Bootstrap**.
* Le deuxième serveur : apache-dynamic, fait tourner un serveur **Node.js**, et fournis une API qui permet de générer des noms, prénom, date de naissances. via une librairie Javascript, **Express**.
* Le troisième serveur : reverse-proxy , s'occupe de rediriger les requêtes HTTP entrantes sur les bons serveurs.

## Step 1: Static HTTP server with apache httpd

## Step 2: Dynamic HTTP server with express.js


## Step 3: Reverse proxy with apache (static configuration)


## Step 4: AJAX requests with JQuery

## Step 5: Dynamic reverse proxy configuration
