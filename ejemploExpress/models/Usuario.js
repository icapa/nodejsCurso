/**
 * Created by icapa on 25/4/16.
 */
"use strict";

var mongoose = require ('mongoose');

// Creamos el esquema
var usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    pass: String
});

// lo asignamos al modelo
var Usuario = mongoose.model('Usuario',usuarioSchema);

