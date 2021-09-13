//* Resumão da turma

// String = Array(Vetor) de caracteres
// índice/index = Posição do elemento no vetor

// Array.push(paramentro, parametro2...) -> Insere no final (Retorna o comprimento novo do Array)

// Array.pop() -> Retira o último elemento (Retorna o elemento que foi retirado)

// Array.shift() -> Retirar o primeiro elemento (Retorna o elemento que foi retirado)

// Array.unshift(parametro, parametro2...) -> Insere no começo (Retorna o comprimento novo do Array)

// Array.join(parametro) -> Juntar os elementos de um Array em uma string (O parâmetro define o separador (Padrão: ",")) (Retorna String concatenada)

// Array.indexOf(parametro) -> Procura elemento dentro de um vetor. Retorna o índice do que foi procurado ou '-1' caso não encontre. 
// Recebe como parâmetro aquilo que vai procurar. Procura a partir do início.

// Array.lastIndexOf(parametro) -> Procura elemento dentro de um vetor. Retorna o índice do que foi procurado ou '-1' caso não encontre. 
// Recebe como parâmetro aquilo que vai procurar. Procura a partir final.

// Array.includes(parametro) -> Procura elemento dentro de um vetor. Retorna 'true' caso encontre ou 'false' caso não encontre.
// Recebe como parâmetro aquilo que vai procurar.

// Array.reverse() -> Inverte os elementos de um Array (Modifica o array original)

// Array1.concat(array2) -> Concatena no 'array1' o 'array2'. Retorna um novo Array sem modificar o primeiro.

const filmes = ["star wars", "totoro", "rocky", "pulp fiction", "rocky"];
const carros = ["Toyouta", "Hyundai", "Ford"];

// Exercício 1
function converterMaiusculas(arr){
    for(let i = 0; i < arr.length; i++){
        //arr.push(arr.shift().toUpperCase());
        arr.unshift(arr.pop().toUpperCase());
    }
};

converterMaiusculas(filmes);
console.log(`Array convertido = [${filmes}]\n`); //Pula uma linha

console.log(carros.length);
// Exercício 2
function passagemDeElemento(arr1, arr2){
    let tamanho = arr2.length;
    for(let i = 0; i < tamanho; i++){
        arr1.push(arr2.pop());
    }
};

passagemDeElemento(filmes, carros);
console.log(`Array após passagemDeElemento() = [${filmes}]`);
console.log(carros);