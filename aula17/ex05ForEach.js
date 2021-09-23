// Aula 17 - 20/09/2021
// Métodos Avançados
// ex04ForEach.js
// forEach() é um método que chama uma função uma vez para cada elemento
// em um array.

let pizza = ['fatia1', 'fatia2', 'fatia3', 'fatia4',];

// pizza.forEach(
//     function(fatia) {
//         console.log(fatia);
//     }
// )

// forEach => LOOP
// 4 ciclos

// Para cada ciclo, executa uma função passada como callback utilizando o elemento do array como parâmetro
pizza.forEach(elemento => {console.log(elemento);});