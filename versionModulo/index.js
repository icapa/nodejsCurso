/**
 * Created by icapa on 19/4/16.
 */
"use strict";

//Cargamos las librerias que nos hace falta
var fs = require('fs');
var path = require('path');

function versionModulo(moduleName, callback){
    var fichero = path.join('./node_modules/',moduleName ,'/package.json');
    console.log(fichero);
    
    fs.readFile(fichero, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        try{
            var packageJson = JSON.parse(data);
        }catch(e)
        {
            callback('No se pudo entender el formato del fichero '+fichero);
            return;
        }

        callback(null,packageJson.version);
    });
}


// Leer el package.json


// Parsear el fichero


// obtener version

//--------- Llamada a la funcion
versionModulo('chance',function(err,version){
    if (err){
        console.log('Hubo un error al buscar modulo',err);
        return;
    }
    console.log('La version de chance es, ',version);
})