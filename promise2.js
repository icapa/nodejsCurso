/**
 * Created by icapa on 28/4/16.
 */
"use strict";

function conArroz(plato){
    return new Promise(function(resolve,reject){
        resolve(plato+ ' arroz');
    });
}

function conAjo(plato){
    return new Promise(function(resolve,reject){
        resolve(plato+ ' ajo');
    });
}

function con(plato,ing){
    return new Promise(function(resolve,reject){
        if (ing === 'patatas'){
            return reject(new Error('me niego a echarle patatas'));
        }
        resolve(plato+ ' ' + ing);
    });
}

var paella = 'paella con';

conArroz(paella)

    .then(conAjo)

    .then(function(plato){
    return con(plato,'sal');
})
    .then(function(plato) {
    console.log(plato);
})

.catch(function(err){
    console.log('Error',err);
});

//-----------------------------

var resultado = '';

function echar(ing){
    return new Promise(function(resolve,reject){
       resolve(resultado+ ' ' + ing);
    });
}

var ingredientes = ['conejo','pollo','pimienta','gambas'];

// llamadas a echar en paralelo
var arrayDePromesas = ingredientes.map(echar);    // Ejecuta echar con cada uno

Promise.all(arrayDePromesas).then(function(res){
   console.log('res:',res);
});


