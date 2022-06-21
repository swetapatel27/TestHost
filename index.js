var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./route');


 var app = express();
 app.use(router);
 app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
 })