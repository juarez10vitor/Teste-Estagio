
const numero = 21; 


let a = 0;
let b = 1;
let pertence = false;

if (numero === a || numero === b) {
    pertence = true;
} else {

    let c = a + b;
    while (c <= numero) {
        if (c === numero) {
            pertence = true;
            break;
        }
        
        a = b;
        b = c;
        c = a + b;
    }
}

if (pertence) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
