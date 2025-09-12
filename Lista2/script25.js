const prompt = require("prompt-sync")();

function calculadora(expressao) {
    return eval(expressao);
}

let exprexao = prompt("Digite a expreção: ")

console.log(calculadora(exprexao)); 

