const prompt = require("prompt-sync")();

let numeros = [10, 5, 8, 3, 12];
console.log("Array numeros:", numeros);


let numerosString = numeros.join(",");
console.log("Array como string:", numerosString);


numeros.reverse();
console.log("Array invertido:", numeros);


let doisPrimeiros = numeros.slice(0, 2); 
console.log("Dois primeiros elementos:", doisPrimeiros);


let nomes = ["daniel", "Carlos", "Isabela", "João"];
nomes.sort();
console.log("\nArray nomes ordenado:", nomes);


let numerosPares = numeros.filter(n => n % 2 === 0);
console.log("Números pares:", numerosPares);


let quadrados = numeros.map(n => n * n);
console.log("Quadrados dos números:", quadrados);


let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Soma de todos os números:", soma);


console.log("\nImprimindo nomes:");
nomes.forEach(nome => console.log(nome));
