const prompt = require("prompt-sync")();

let texto = prompt("Digite o texto: ");
let caracter = prompt("Digite o caracter: ");

console.log(contarCaractere(texto, caracter));

function contarCaractere(texto, caracter) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    return contador;
}



