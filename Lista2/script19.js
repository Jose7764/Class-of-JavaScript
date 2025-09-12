const prompt = require("prompt-sync")();

let idades = new Array();

while (true) {
    console.log("Lista de numeros - 0 para parar")
    let idade = Number(prompt("- "))

    if(idade == 0){
        break;
    }

    idades.push(idade);
}



console.log("Array de idades:", idades);

let todasMaioresQue18 = idades.every(idade => idade > 18);
console.log("Todos maiores que 18?", todasMaioresQue18);
