/* O método JavaScript forEach é um tipo de estrutura de repetição, 
só que ele é disponível para a manipulação dos elementos de um array. */

const nomes = ['Sílvia', 'Hellen', 'Larissa'];

nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})