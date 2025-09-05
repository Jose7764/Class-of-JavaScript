const prompt = require('prompt-sync')();


let nota1 = Number(prompt('Insira a primeira nota'))
let nota2 = Number(prompt('Insira a segunda nota'));
let nota3 = Number(prompt('Insira a terceira nota'));

let media = (nota1 + nota2 + nota3) /3

if(media > 7) {

    console.log('Aprovado')

}else if(media > 4 && media < 7) {

    console.log('Exame')

}else if(media < 4) {

    console.log('Reprovado')

}