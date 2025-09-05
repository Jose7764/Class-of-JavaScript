const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro valor: "));
let num2 = Number(prompt("Digite o segundo valor : "));

let soma = num1 + num2;

if (soma > 10){
    console.log(soma);
    
}