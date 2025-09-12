const prompt = require("prompt-sync")();

let nomeDigitado = prompt("Digite o nome da pessoa: ");
let idadeDigitado = Number(prompt("Digite a idade da pessoa: "));
let profissaoDigitado = prompt("Digite a profissao da pessoa: ");

let pessoa = {
    nome: nomeDigitado,
    idade: idadeDigitado,
    profissao: profissaoDigitado
};

console.log(pessoa);
