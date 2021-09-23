/* O JavaScript map faz parte do conjunto de métodos disponíveis
na linguagem para a manipulação de objetos do tipo array. 
Ele funciona como uma estrutura de repetição, 
pois percorre todos os elementos do array, 
executa determinada ação e retorna um novo conteúdo.

Por isso, sua utilização reduz a necessidade de uso 
das estruturas de repetição tradicionais como 
while, for ou do.while. 

Isso significa executar ações com menos linhas de código, 
o que contribui para o desenvolvimento uma aplicação mais 
fácil de entender e de fazer manutenções. */

const nomes = ['Sílvia', 'Hellen', 'Larissa'];

nomes.map((nome, i) => console.log('[forEach]', nome, i));
