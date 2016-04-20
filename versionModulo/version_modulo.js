/**
 * Created by icapa on 20/4/16.
 */
"use strict";

var fs = require('fs');
var path = require('path');
var async = require('async');


function versionModulo(moduleName, callback){
    var fichero = path.join('./node_modules/',moduleName ,'/package.json');
    //console.log(fichero);

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

        callback(null,moduleName+' => ' + packageJson.version);
    });
}


function versionAllModules(callback){
    fs.readdir('./node_modules/',function(err,files) {
        if (err) {
            callback(err);
            console.log("No folder available");
            return;
        }
        async.concat(files,versionModulo,function(err,results){
            if (err){
                console.log('Error buscando modulos');
                return;
            }
            callback(null,results);
        });
    });

}



versionAllModules(function(err,theModules){
   if (err){
       console.log("Error buscando modulos");
       return;
   }
    console.log(theModules);
    console.log('--- Fin ---')
});

console.log('### Y aqui sigue el lazo ... es asincrono ###');