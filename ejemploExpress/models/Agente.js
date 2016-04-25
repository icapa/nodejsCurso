/**
 * Created by icapa on 25/4/16.
 */
"use strict";

var mongoose = require ('mongoose');

// Creamos el esquema
var agenteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number
});

// lo asignamos al modelo
mongoose.model('Agente',agenteSchema);

