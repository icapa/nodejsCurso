/**
 * Created by icapa on 18/4/16.
 */
"use strict";

console.log('empiezo');



function escribeTras2Segundos(n, callBack){
    setTimeout(function(){
        console.log('texto'+n);
        callBack();
        return;
    },2000);
}
//--- Esto sería con una n sin arrays ---
/*
function serie(n,fn,callbackFin){
    if (n == 0){
        callbackFin();
        return;
    }
    n--;
    fn(n, function(){
        serie(n,fn,callbackFin);
    })
}


serie(5,escribeTras2Segundos,function(){
    console.log("termino");
});

*/

function serie(arr,fn,callbackFin){
    if (arr.length==0){
        callbackFin();
        return;
    }

    fn(arr.shift(), function(){
        serie(arr,fn,callbackFin);
    })
}
serie([1,2,3,4,5],escribeTras2Segundos,function(){
    console.log("termino");
});


