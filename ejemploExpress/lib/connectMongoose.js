/**
 * Created by icapa on 25/4/16.
 */
"use strict";

var mongoose = require('mongoose');
var conn = mongoose.connection;

// handlers de eventos de conexion
conn.on('error',console.log.bind(console,'connection error'));

conn.once('open',function(err,db){
   console.log('Connected to mongodb!!');
});


// conectar a la base de datos

mongoose.connect('mongodb://localhost:27017/cursonode');

// No hay callback pero emite los eventos