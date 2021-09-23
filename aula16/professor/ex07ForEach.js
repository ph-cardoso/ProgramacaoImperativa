/* O método JavaScript forEach é um tipo de estrutura de repetição, 
só que ele é disponível para a manipulação dos elementos de um array. */

var arrayNumeros = [1,2,3,4,5,6];
function verificaPares(elemento){
    if (elemento % 2 == 0) 
    console.log(elemento);
}
arrayNumeros.forEach(verificaPares);
/*saída:
2
4
6
*/