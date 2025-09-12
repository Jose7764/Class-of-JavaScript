const prompt = require("prompt-sync")();

function gerarSenha(tamanho) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    return senha;
}

let tamanho = Number(prompt("Digite a quantidade de caracteres: "))

console.log(gerarSenha(tamanho));  

