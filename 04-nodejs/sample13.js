///async&await

//async
async function hola (nombre) {
    return new Promise (function(resolve, reject) {
        setTimeout(function () {
            console.log ("Hola " + nombre);
            resolve(nombre);
        }, 500);
    });
}
 
async function hablar (nombre){
    return new Promise ( (resolve, reject) => {
        setTimeout(function(){
            console.log("Bla bla bla...");
            resolve(nombre);
        },200);
    });
}
 
async function adios (nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function() {
            console.log ('Adios ' + nombre);
            resolve();
        }, 500)
    }); 
}

async function main () {
    let nombre = await hola ("Caro");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log ("Fin");
}

console.log ("Inicio")
main();
