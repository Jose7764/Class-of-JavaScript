const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um numero; "));

function dividirMetade(){

    let resultado ;
    if (num > 20){
        resultado = num /2;
    }else{
        resultado = num;
    }

    return resultado;
}

resultado = dividirMetade();
console.log(resultado);