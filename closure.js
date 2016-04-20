/**
 * Created by icapa on 19/4/16.
 */
"use strict";

function creaClosuse(nombre,nuevaEdad){
    var edad= nuevaEdad || 20;
    return function(){
        console.log(nombre+ ' ' + edad);
    }
}

var  unClosure = creaClosuse('Juan',15);
var otroClosure = creaClosuse('Alberto');
unClosure();
otroClosure();
