const prompt = require("prompt-sync")();

let nomeDigitado = prompt("Digite o nome da pessoa: ");
let idadeDigitado = Number(prompt("Digite a idade da pessoa: "));
let profissaoDigitado = prompt("Digite a profissao da pessoa: ");

let arrayHobbies = []; 

criarHobbies(); 

let pessoa = {
    nome: nomeDigitado,
    idade: idadeDigitado,
    profissao: profissaoDigitado,
    Hobbies: arrayHobbies
};

console.log(pessoa);

function criarHobbies() {

    console.log("Digite 0 para parar!");
    while (true) {
        
        let hobbie = prompt("Digite o hobbie: ");

        if (hobbie == 0) { break; }

        arrayHobbies.push(hobbie);
    }
}
