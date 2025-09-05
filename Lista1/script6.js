const prompt = require("prompt-sync")();

let Celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "));

let Fahrenheit = CelsiusParaFahrenheit(Celsius);

console.log(Fahrenheit);

function CelsiusParaFahrenheit(Celsius){

    let conversao = 1.8 * Celsius + 32;

    let Fahrenheit = parseFloat(conversao);

    return Fahrenheit;
}