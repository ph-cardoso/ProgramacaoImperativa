// Aula 16
// Arrow Function

// Questão para a Mesa trabalho -> como imprimir os dois parâmetros

// função clássica
function somar(num1,num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
}

const somarArrow = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// (parâmetros) => retorno


/* console.log("num1......: "+num1);
console.log("num2......: "+num2); */

console.log(somar(2,2));
console.log(somarArrow(3, 4));