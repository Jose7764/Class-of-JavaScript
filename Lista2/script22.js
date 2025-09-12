let frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

console.log(frutas[1]);
frutas.push("morango");

console.log(frutas);
frutas.shift();
console.log(frutas);
let numeros = [1, 2, 3, 4, 5];
numeros.push(6);

console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.unshift(0);
console.log(numeros);
numeros.shift();
console.log(numeros);

let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);
let primeiros = todasFrutas.slice(0, 2);
console.log(primeiros);
todasFrutas.splice(1, 1);
console.log(todasFrutas);

let indiceBanana = todasFrutas.indexOf("banana");
console.log(indiceBanana);
let frutasM = todasFrutas.filter(f => f.startsWith("m"));
console.log(frutasM);

let numerosDobrados = numeros.map(n => n * 2);
console.log(numerosDobrados);
todasFrutas.forEach(f => console.log(f));
