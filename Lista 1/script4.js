const prompt = require("prompt-sync")();

let numero ;

pedirNumero();

function pedirNumero(){
    numero = parseInt(prompt("Digite um número: "));
}

if (numero < 0){
    console.log("ERRO! digite um numero válido");
    pedirNumero();

}

let resultado = fatorial(numero);

console.log(resultado);

function fatorial(numero){

    let resultado = 1;

    for(let i = 1; i <= numero; i++){

        resultado *= i;
    }
    return resultado;
}