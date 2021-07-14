var n = parseInt(prompt("Ingresa un numero: "));
    
var factorial = n => (n <= 0) ? 1: n * factorial(n - 1);
factorial(n);