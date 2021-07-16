///promises

/*
// solo con Callback
function hola (nombre, callback) {
    setTimeout(function () {
        console.log ("Hola " + nombre);
        callback(nombre);
    }, 500);
}
*/
// con Promise
function hola (nombre) {
    return new Promise (function(resolve, reject) {
        setTimeout(function () {
            console.log ("Hola " + nombre);
            resolve(nombre);
        }, 500);
    });
}
/*
function hablar (callback){
    setTimeout(function(){
        console.log("Bla bla bla...");
        callback();
    },500);
}
*/
function hablar (nombre){
    return new Promise ( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla...");
            resolve(nombre);
        },200);
    });
}
/*
function adios (nombre, callback) {
    setTimeout(function() {
        console.log ('Adios ' + nombre);
        callback();
    }, 500)
}
*/
function adios (nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function() {
            console.log ('Adios ' + nombre);
            resolve();
        }, 500)
    }); 
}

/*
console.log('Inicio...');
hola ("Caro")
    .then ( (nombre) => {
        console.log("Fin")
    });
*/
//--------
/*
console.log('Inicio...');
hola ("Caro")
    .then ( (nombre) => {
        return adios(nombre)
    })
    .then ( (nombre) => {
        console.log("Fin")
    });
*/
//------
/*
    console.log('Inicio...');
    hola ("Caro")
        .then ( (nombre) => { return hablar (nombre) } )
        .then ( hablar )
        .then ( hablar )
        .then ( hablar )
        .then ( adios)
        .then ( () => {
            console.log("Fin")
        });    
*/
//------
/* 
console.log('Inicio...');
hola ("Caro")
    .then ( (nombre) => { return hablar (nombre) } )
    .then ( hablar )
    .then ( hablar )
    .then ( hablar )
    .then ( adios)
    .then ( () => {
        console.log("Fin")
    })
    .catch ( error => {
        console.error('Ocurrio un error:');
        console.error(error);
    });  
  */  