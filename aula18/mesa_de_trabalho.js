/*
Programação Imperativa - Sala 4

- Luana Borges
- Pedro Henrique Cardoso
- Alexandre S. Bastos
- Gustavo Souza
- João Eduardo Eloi
- Marcos Rezende
*/

// Exercício 1
// Tem-se um conjunto de dados contendo a altura e o
// sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
// ● a maior e a menor altura do grupo;
// ● a média de altura das mulheres;
// ● o número de homens.

// COM ARRAY
const altura = [1.5, 1.6, 1.65, 1.68, 1.7, 1.72, 1.74, 1.78, 1.78, 1.8, 1.8, 1.9, 1.91, 1.92, 1.93];
const sexo = ['M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'F', 'F', 'F', 'F', 'F', 'F', 'F'];

// Maior e menor altura do grupo
// Spread Operator: ...altura => Passa todos os elementos para função
console.log(`Maior altura: ${Math.max(...altura)}`); 
console.log(`Menor altura: ${Math.min(...altura)}\n\n`);

// Média de altura das mulheres
let somaMulheres = 0;
let qtdMulheres = 0;

// Loop que percorre todos os elementos do array 'altura'
for(let i = 0; i < altura.length; i++){
    // Se sexo[i] for 'F'
    if(sexo[i] === 'F'){
        somaMulheres += altura[i]; //somaMulheres = somaMulheres + altura[i]
        qtdMulheres++;
    }
}

console.log(`Média de altura das mulheres: ${somaMulheres/qtdMulheres}\n\n`);

// A quantidade de Homens
const arrHomens = sexo.filter(elemento => elemento === 'M'); // Array.filter => Retorna um novo array filtrando por 'M'
console.log(`Quantidade de homens: ${arrHomens.length}\n\n`); // Qtd de homens = arrHomens.lenght

// Exercício 2
// Cada espectador de um cinema respondeu a um
// questionário no qual constava sua idade e a sua opinião em
// relação ao filme: ótimo - 3, bom - 2, regular - 1.
// Faça um programa que receba a idade e a opinião de 15
// espectadores, calcule e imprima:
// ● a média das idades das pessoas que responderam ótimo;
// ● a quantidade de pessoas que responderam regular;
// ● a porcentagem de pessoas que responderam bom entre todos os
// espectadores analisados.

// Declaração de um array com 15 objetos como elemento
const lista = [ {idade: 10, opiniao: 1}, {idade: 20, opiniao: 2}, {idade: 21, opiniao: 3}, 
                {idade: 15, opiniao: 2}, {idade: 16, opiniao: 1}, {idade: 17, opiniao: 3}, 
                {idade: 22, opiniao: 3}, {idade: 24, opiniao: 2}, {idade: 28, opiniao: 3}, 
                {idade: 30, opiniao: 1}, {idade: 32, opiniao: 2}, {idade: 34, opiniao: 1}, 
                {idade: 54, opiniao: 3}, {idade: 56, opiniao: 1}, {idade: 68, opiniao: 1} ];


// A média das idades das pessoas que responderam com ótimo
// Ótimo = 3
let somaOtimo = 0;
let qtdOtimo = 0;
for(let i = 0; i < lista.length; i++){
    // Se lista[i] na propriedade 'opiniao' for igual a 3
    if(lista[i].opiniao === 3){
        somaOtimo += lista[i].idade; // Soma lista[i] na propriedade 'idade'
        qtdOtimo ++;
    }
};

console.log(`Média das idades que responderam Ótimo: ${somaOtimo/qtdOtimo}\n\n`);


// Qtd de pessoas que responderam regular
// Regular = 1
// \n => Pula linha
let qtdRegular = 0;

// for ... of => Percorre os elementos de um array
for(let elemento of lista){
    // Se elemento.opiniao for igual a 1
    if(elemento.opiniao === 1){
        qtdRegular++;
    }
}

console.log(`Quantidade de Regulares: ${qtdRegular}\n\n`);

// Porcentagem que respondeu BOM
// Bom = 2
let qtdBom = 0;

// Loop que percorre todos os elementos de 'Lista'
for(let i = 0; i < lista.length; i++){
    // Se lista[i] na propriedade 'opiniao' for igual a 2
    if(lista[i].opiniao === 2){
        qtdBom ++;
    }
};

// Console.log na porcentagem
// Quantidade que respondeu Bom Dividido pelo total da lista => Resposta em decimal
// Multiplicar por 100 para obter a porcentagem
console.log(`Porcentagem que respondeu bom: ${((qtdBom/lista.length)*100).toFixed(2)}%`);