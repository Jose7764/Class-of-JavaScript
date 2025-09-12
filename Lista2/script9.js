const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let numero3 = Number(prompt("Digite o terceiro número: "));

console.log(ordemCrescente(numero1, numero2, numero3));

function ordemCrescente(numero1, numero2, numero3){

    let numeros = [numero1, numero2, numero3];

    let maior;
    let menor;
    let medio;

    if(numero1 > numero2 && numero1 > numero3){
        maior = numero1;
    }
    else if(numero2 > numero1 && numero2 > numero3){
        maior = numero2;
    }
    else if(numero3 > numero1 && numero3 > numero2){
        maior = numero3;
    }
    
    //---------------------------------------------------------//

    if(numero1 < numero2 && numero1 < numero3){
        menor = numero1;
    }
    else if(numero2 < numero1 && numero2 < numero3){
        menor = numero2;
    }
    else if(numero3 < numero1 && numero3 < numero2){
        menor = numero3;
    }

    //---------------------------------------------------------//

    if(numero1 != maior && numero1 != menor){
        medio = numero1;
    }
    else if(numero2 != maior && numero2 != menor){
        medio = numero2;
    }

    else if(numero3 != maior && numero3 != menor){
        medio = numero3;
    }

    return numeros = [menor, medio, maior];

}