var str = prompt("Ingresa una frase: ");
const words = str.split(" ");

words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");