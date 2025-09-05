const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "));

if (idade < 16){
    console.log("Não Eleitor");
}else if (idade >= 18 && idade < 65){
    console.log("Eleitor obrigatório");
}else if(idade >= 16 && idade < 18){
    console.log("Eleitor facultativo");
}else{
    console.log("Eleitor facultativo");

}
