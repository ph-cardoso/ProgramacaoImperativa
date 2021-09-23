// Aula 17 - 20/09/2021
// Métodos Avançados
// ex02Filter.js
// filter() é um método que retorna um novo array,
// com os elementos que atendem uma condição

let idades = [22, 8, 17, 14, 30];

// Retorna um novo array com elementos filtrados a partir de um callback
// Nesse caso filtrou por idades maiores que 18

let maiores = idades.filter(
    function (idade) {
        return idade > 18;
    }
);

console.log(maiores);