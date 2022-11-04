var eventos = require('eventos');
var EmisorEventos = eventos.EventEmitter;
var manejador = new EmisorEventos();

manejador.on('saludo', function(nombre){
    console.log("Hola " + nombre);
});
manejador.on('despedida', function(nombre){
    console.log("Adios " + nombre);
});

manejador.emit('saludo', "Daniel");

setInterval(function(){
    manejador.emit('saludo', "Daniel");
},1000);
setInterval(function(){
    manejador.emit('despedida', "Daniel");
},1000);
