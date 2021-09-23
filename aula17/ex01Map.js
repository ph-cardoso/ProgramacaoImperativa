// Aula 17 - 20/09/2021
// Métodos Avançados
// ex01Map.js
// O map() é um método que cria uma nova matriz com os resultados
// da chamada de uma função para cada elemento da matriz.

let letrasMinusculas = ['a', 'b', 'c', 'd'];

// Retorna um novo array contendo letras maiúsculas utilizando o .map via .toUpperCase executado em cada elemento

// função clássica
let letrasMaiusculas = letrasMinusculas.map(
    function maiuscula(letra) {
        return letra.toUpperCase();
    }
);

// função com arrow function
let letrasMaiusculas = letrasMinusculas.map(
    maiuscula = letra => letra.toUpperCase()
);

console.log(letrasMinusculas);
console.log(letrasMaiusculas);