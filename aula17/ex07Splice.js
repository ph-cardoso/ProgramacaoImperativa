// Aula 17 - 20/09/2021
// Métodos Avançados
// ex07Splice.js
// splice = emenda
// Splice() é o método que serve para remover e adicionar elementos
// de uma array
// Sintaxe array.splic(inicio, quantidade, item1, item2...)
// quantidade é opcional - números inteiro a eliminar no array

let frutas = ['Banana','Laranja','Limão','Maçã','Manga'];
console.log(frutas);
// frutas.splice(2,0,"Mamão","Kiwi");

// console.log("Lista com adição.....: ",frutas);

console.log(frutas.splice(1, 1, "Pedro", "João"));
console.log(frutas);

// Splice => Retira e troca elementos de um array. Recebendo como parâmetro um ínicio, a quantidade de retiradas 
// e opcionalmente o que deve ser substituído