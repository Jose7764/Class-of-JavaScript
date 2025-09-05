const prompt = require("prompt-sync")();

let valorProduto = Number(prompt("Digite o valor do produto: "));

let lucro1 = valorProduto+(valorProduto * 0.45);
let lucro2 = valorProduto+(valorProduto * 0.30);

let valorVenta;

if (valorProduto < 20){

    valorVenta = lucro1;
    
}else {

    valorVenta = lucro2;

}

console.log(valorVenta);