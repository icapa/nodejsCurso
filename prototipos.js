/**
 * Created by icapa on 19/4/16.
 */
"use strict";

function Persona(name){
    this.name = name;
}

var persona = new Persona('Neo');

// asigno metodo a todas las personas
Persona.prototype.saluda = function(){
    console.log('Hola soy ' + this.name);
}

persona.saluda();

// Herencia de Persona

function Agente(name) {
    Persona.call(this,name);
    // Ejecuto el constructor de Persona sobre mi mismo
}

Agente.prototype = new Persona('soy prototipo');   // Solo se crea para hacer la herencia

// creo agentes que heredan de Persona

var agente = new Agente('Smith');

agente.saluda();

console.log(
  Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object

);