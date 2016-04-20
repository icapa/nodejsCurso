/**
 * Created by icapa on 18/4/16.
 */
// Constructor de objetos
function Fruta(nombre){
    this.nombre = nombre || 'limon';
    this.setNombre = function(valor){
        this.nombre = valor;
    }
    return {
        setNombre : this.setNombre,
        getNombre : function(){
            return this.nombre;
        }
    }
}

// Crear un objeto
var  fruta = new Fruta();

console.log(fruta);

fruta.setNombre('naranja');

console.log (fruta);

var pera = new Fruta('pera');

console.log(pera);




var sessionID = undefined && request && request.session;

console.log(sessionID);