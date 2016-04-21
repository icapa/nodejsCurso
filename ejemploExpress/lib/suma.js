/**
 * Created by icapa on 21/4/16.
 */
"use strict";

console.log('Creando libreria suma');

// Crear una function
var sumar = function(n1,n2){
    return n1+n2;
};

// Exportar la funcion
//module.exports = sumar;

// exporto un objeto con la funcion como metodo

module.exports.suma = sumar;

// Esto es equivalente a
//exports.suma = sumar;

// asi me cargo el alias y no funciona

//exports = sumar;    // Se sobreescribe el alias..eso noooo