const prompt = require("prompt-sync")();

let salario = prompt("Digite o teu salario: ");
let prestacao = prompt("Digite a prestação: ");

if (prestacao > salario*0.2){
    console.log("Emprestimo Denegado");
}else {
    console.log("Emprestimo Concedido");
}