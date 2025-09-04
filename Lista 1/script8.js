
let soma = 0;

function somaCentena(){
    for (let i = 1; i <= 100; i++){

        soma +=i;
    }
    return soma;
}

resultado = somaCentena();
console.log(resultado);