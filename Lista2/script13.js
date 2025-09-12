const prompt = require("prompt-sync")();

let capitalInicial = Number(prompt("Digite o valor de capital inicial investido: "));
let taxaJuros = Number(prompt("Digite a taxa de juros em percentual: "));
let tempo = Number(prompt("Digite o tempo de investimento, em meses: "))

function calcularMontante(capital, taxa, tempo) {
    let i = taxa / 100;
    let montante = capital * Math.pow(1 + i, tempo);
    return montante.toFixed(2);
}

console.log(calcularMontante(capitalInicial, taxaJuros, tempo));
