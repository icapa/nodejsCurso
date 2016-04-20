/**
 * Created by icapa on 20/4/16.
 */
"use strict";

var events = require('events');

var emisor = new events.EventEmitter();

emisor.on('llamada de telefono',function(quien){
    if (quien !== 'madre') {
        console.log('ring ring');
    }
});

emisor.on('llamada de telefono',function(){
   console.log('brrr, brrrr');
});


setTimeout(function(){
    emisor.emit('llamada de telefono','madre');
    emisor.emit('llamada de telefono','pepito');
},2000);
//emisor.emit('llamada de telefono','madre');
