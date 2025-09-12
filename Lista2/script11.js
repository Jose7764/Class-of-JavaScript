const prompt = require("prompt-sync")();

let quantidadeEscolhida = Number(prompt("Digite a quantidade de numeros que serão digitados: "));
let inicio = 1;

let lista = new Array();

while (quantidadeEscolhida >= inicio){

    let numero = Number(prompt("Digite o "+ inicio + "º valor - "));

    lista.push(numero);
    inicio++;

}

console.log(ordenar(lista));

function ordenar(lista){
    
    return lista.sort((a, b) => a - b);
}