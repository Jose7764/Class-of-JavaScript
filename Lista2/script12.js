const prompt = require("prompt-sync")();

let inicio1 = 1;
let inicio2 = 1;
let array1 = new Array();
let array2 = new Array();

console.log("  - Primeiro array  -  Para parar digite '0' ");
while(true){
    let numero = Number(prompt("Digite " + inicio1 + "° valor "));
    
    if (numero == 0 ){
        break;
    }

    array1.push(numero)
    inicio1++;
}

console.log("\n\n ---------------------------------------------- \n\n");


console.log("  - Segundo array  -  Para parar digite '0' ");
while(true){
    
    let numero = Number(prompt("Digite " + inicio2 + "° valor "));
    
    if (numero == 0 ){
        break;
    }

    array2.push(numero)
    inicio2++;
}


console.log(juntar(array1, array2));

function juntar(array1, array2){
    return array1.concat(array2);
}