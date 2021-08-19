//* Aula 05 - 17/08/2021
//* Author: Pedro Henrique Lima Cardoso

//* Micro Desafio 1
// Resultado: 40 - 10 = 30
//* Micro Desafio 2
// Resultado 10 * 2 = 20

//* Funções (Simples)
// Função 1
let converter = pol => pol*2.54;
// Função 2
let url = str => `https://www.${str}.com.br`;
// Função 3
let exclamacao = str => `${str}!`;
// Função 4
let dogAge = ano => ano * 7;
// Função 5
let valorHora = salario => (salario/160).toFixed(2);
// Função 6
let imc = (peso, altura) => (peso/((altura/100) ** 2)).toFixed(2);

//* Funções (Dificuldade Extra)
// Função 7
let toUpper = str => str.toUpperCase();
// Função 8
let tipo = x => typeof(x);
// Função 9.1
let areaCirc = r => (r ** 2 * Math.PI).toFixed(2);
// Função 9.2
let compCirc = r => (2 * Math.PI * r).toFixed(2);

//Testes
console.log(`Função 1 (6): ${converter(6)}`); //Expected: 15.24
console.log(`Função 2 ("google"): ${url("google")}`); //Expected: "https://www.google.com.br"
console.log(`Função 3 ("Teste"): ${exclamacao("Teste")}`); //Expected: "Teste!"
console.log(`Função 4 (5): ${dogAge(5)}`); //Expected: 35
console.log(`Função 5 (1750): ${valorHora(1750)}`); //Expected: 10.94
console.log(`Função 6 (90, 175): ${imc(90, 175)}`); //Expected: 29.39
console.log(`Função 7 ("teste de uppercase"): ${toUpper("teste de uppercase")}`); //Expected: "TESTE DE UPPERCASE"
console.log(`Função 8 (true): ${tipo(true)}`); //Expected: "boolean"
console.log(`Função 9.1 (Área r = 4): ${areaCirc(4)}`); //Expected: 50.27
console.log(`Função 9.2 (Comprimento r = 6): ${compCirc(6)}`); //Expected: 37.70