/**
 * Created by icapa on 19/4/16.
 */
"use strict";
var persona ={
    name: 'Juan',
    surname: 'Lopez',
    printFullName: function(n) {
        console.log(this.name + ' ' + this.surname+ n);
    }
}

//persona.printFullName();
//arreglamos this con bind
//setTimeout(persona.printFullName.bind(persona),2000);

//arreglamos this con el call
persona.printFullName.call(persona,5);

//arreglamos this con el apply
persona.printFullName.apply(persona,[5]);

