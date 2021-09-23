// Aula 17 - 20/09/2021
// Métodos Avançados
// ex06Slice.js
// slice = fatiar
/* O método array.slice(), retorna os elementos selecionados da matriz
sintaxe: array.slice(inicio, fim) */

let frutas = ['Banana','Laranja','Limão','Maçã','Manga'];

let citricas = frutas.slice(3);

// Slice => Retorna um novo array tendo como elemento uma porção do array em que foi invocado como método
// Recebe como parâmetros um ínicio e um fim (o fim não é retornado)

console.log(frutas);
console.log(citricas);