const prompt = require("prompt-sync")();

let palavra = prompt("Digite a palavra: ");

let reversa = inverter(palavra);

function inverter(palavra) {
    
    let palavraDigitada = palavra.replaceAll(" ", "").toLowerCase();

    let palavraReversa = Array.from(palavraDigitada).reverse().join("");

    return palavraReversa;
}

console.log(reversa)