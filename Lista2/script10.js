const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let numero3 = Number(prompt("Digite o terceiro número: "));

let lista = [numero1, numero2, numero3];

organizar();

function organizar(){

    lista.reverse();

    console.log(lista);

}
