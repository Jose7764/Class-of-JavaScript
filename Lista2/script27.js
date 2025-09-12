const prompt = require("prompt-sync")();

function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.floor(Math.random() * 100));
        }
        matriz.push(linha);
    }
    return matriz;
}

let linhas = Number(prompt("Digite o numero de linhas: "))
let colunas = Number(prompt("Digite o numero de colunas: "))

console.log(criarMatriz(linhas, colunas));
