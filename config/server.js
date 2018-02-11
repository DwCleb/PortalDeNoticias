var express = require('express');
//forma didática do retorno do 'require('express')();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
//implementando body-parser
app.use(bodyParser.urlencoded({extended: true}));

//implementando express-validator
app.use(expressValidator());

//faz um scan na aplicação e pega os modulos e inclui no servidor incluindo as rotas
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);
    


module.exports = app;
