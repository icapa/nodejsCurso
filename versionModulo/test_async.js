/**
 * Created by icapa on 20/4/16.
 */
"use strict";

var async = require('async');

var arrayTest=['uno','dos','tres'];

console.log(arrayTest);

async.concat(arrayTest,iterate,function(error,files){
    console.log('Los files son', files);
});

function iterate(item,callback) {
    var resul = item + ' cocinada';
    callback(null,resul);
}
