// Aula 17 - 20/09/2021
// Métodos Avançados
// ex04Reduce.js
// Reduce() é um método que pecorre o array e
// retorna um único valor. Ele acumula o resultado.

let numeros = [1, 2, -3, 4, -5, 0, 7, 8, 9, 19];

// Reduce => Retorna um número que condensa os elementos de um array a partir de um callback
// Nesse caso, retorna a soma dos elementos do array 'numeros'

let resultado = numeros.reduce(
    function(totalizador, elemento) {
        return totalizador+elemento;
    }
);

console.log(resultado);