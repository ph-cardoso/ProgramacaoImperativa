
/*A instrução for cria um loop que consiste em três expressões
for ([inicialização]; [condição]; [expressão final])*/
const nomes = ['Sílvia', 'Hellen', 'Larissa'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i]);
}