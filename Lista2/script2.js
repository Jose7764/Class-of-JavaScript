const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um numero: "));

let reajuste = num +(num * 0.15);

console.log(reajuste);