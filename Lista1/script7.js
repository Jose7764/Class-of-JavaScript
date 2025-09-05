const prompt = require("prompt-sync")();

let palavra = prompt("Digite a palavra: ");

verificaPalindromo(palavra);

function verificaPalindromo(palavra) {
    
    let palavraDigitada = palavra.replaceAll(" ", "").toLowerCase();

    let palavraReversa = Array.from(palavraDigitada).reverse().join("");

    if (palavraDigitada === palavraReversa) {
        console.log("É um palíndromo!");
    } else {
        console.log("Não é um palíndromo!");
    }
}
