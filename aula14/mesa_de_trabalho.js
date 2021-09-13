// Grupo:
// Isnard Cavalcanti
// Tulio Marinho
// Pedro Henrique Cardoso
// Thiago Maurat
// Dayana Miranda
// Ricardo Ramalho Del Bianco

const sofrimento = require('./modules/modulo_mesa_de_trabalho');

console.log(`RESULTADOS:`);
console.log(`Resultado do cálculo SOMA = ${sofrimento.soma(2, 6)}`); // Expected: 8
console.log(`Resultado do cálculo SUBTRAIR = ${sofrimento.subtrair(10, 5)}`); // Expected: 5
console.log(`Resultado do cálculo MULTIPLICAR = ${sofrimento.multiplicar(3, 6)}`); // Expected: 18
console.log(`Resultado do cálculo DIVIDIR = ${sofrimento.dividir(8, 4)}`); // Expected: 2
console.log(`Resultado do cálculo MAIUSCULA = ${sofrimento.maiuscula("palavra teste")}`); // Expected: "PALAVRA TESTE"
console.log(`Resultado do cálculo MINUSCULA = ${sofrimento.minuscula("PALAVRA TESTE 2")}`); // Expected: "palavra teste 2"