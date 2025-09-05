const prompt = require("prompt-sync")();

let tempo = prompt("Digite quanto tempo demorou: ");
let velocidade = prompt("Digite a velocidade media: ")

let distancia = tempo * velocidade;

console.log("A distância percorrida é "+distancia+" km")