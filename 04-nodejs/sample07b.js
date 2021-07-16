///Callback mejorado

function hola (nombre, callback) {
    setTimeout(function () {
        console.log ("Hola " + nombre);
        callback(nombre);
    }, 500);
}

function hablar (callback){
    setTimeout(function(){
        console.log("Bla bla bla...");
        callback();
    },500);
}

function adios (nombre, callback) {
    setTimeout(function() {
        console.log ('Adios ' + nombre);
        callback();
    }, 500)
}

function conversacion (nombre, veces, callback){
    if (veces > 0) {
        hablar (function() {
            conversacion(nombre, --veces, callback );
        })
    } else {
        adios (nombre, callback);
    }
}

console.log("Inicia...");
hola ("Caro", function(nombre) {
    conversacion(nombre, 3, function(){
        console.log("Termina");
    });
});
     

/*Comparar codigo anterior
hola ("Caro", function(nombre) {
    hablar(function() {
        hablar (function() {
            hablar (function() {
                adios(nombre, function() {
                    console.log ('Termina');
                } ); 
            });
        });
    }); 
});

*/