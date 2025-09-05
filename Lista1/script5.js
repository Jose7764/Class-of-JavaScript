
const prompt = require("prompt-sync")();

let ano = parseInt(prompt("Digite um ano: "));
verificaBissexto(ano);

function verificaBissexto(numero){
    if(numero % 4 == 0){
        if (numero % 100 > 0){
            console.log("É um ano bissexto");
        } else if (numero % 100 == 0){

            if (numero % 400 == 0){
                console.log("É um ano bissexto");
            }else {
                console.log("Não é um ano bissexto");
            }
        }
    }else {
        console.log("Não é um ano bissexto");
    }
        
    
}