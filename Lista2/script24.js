const prompt = require("prompt-sync")();

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let minimo = Number(prompt("Didite o minimo: "))
let maximo = Number(prompt("Didite o maximo: "))

console.log(gerarNumeroAleatorio(minimo, maximo));  

