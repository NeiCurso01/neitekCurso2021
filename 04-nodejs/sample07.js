///Callbacks

function hola (nombre, callback) {
    setTimeout(function () {
        console.log ("Hola " + nombre);
        callback();
    }, 1000);
}

function adios (nombre, callback2) {
    setTimeout(function() {
        console.log ('Adios ' + nombre);
        callback2();
    }, 500)
}


console.log("Inicia...");
hola ("Caro", function() {
    adios('Caro', function() {
        console.log ('Termina');
    } ); 
});


/*
//Asincrono sin orden
console.log("Inicia...");
hola ("Carolina", function() {} );
adios ("Caro", function() {} );
*/