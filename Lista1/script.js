const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite o numero: '));

if (numero > 0 ) {
  console.log('O numero é Positivo');
} else if (numero == 0) {
  console.log('O numero é 0');
}else if (numero < 0) {
  console.log('O numero é Negativo');
}