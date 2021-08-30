// Aula 10 - Mesa de trabalho 30/08/2021
// Grupo 6:
// Pedro Henrique Cardoso
// Vinícius Alexandre
// Wirley Almeida
// Weverton Gois
// Kantuta Molina

// O QUE ESSE CÓDIGO RETORNA
console.log(`O QUE ESSE CÓDIGO RETORNA`);

console.log(); //Pula uma linha
console.log(`1)`);
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); //Retorna = Undefined


console.log(); //Pula uma linha
console.log(`2)`);
let grupoDeAmigos = [ 
    ["Harry", "Ron", "Hermione"], 
    ["Spiderman", "Hulk", "Ironman"], 
    ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]); //Retorna = Spiderman
 
console.log(); //Pula uma linha
console.log(`3)`)
let str = "una string qualquer";
let grupoDeAmigos2 = [ 
    [45, 89, 0], 
    ["Digital", "House", true], 
    ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]); //Retorna = str = "una string qualquer"

// ARRAY INVERTIDO
console.log(); //Pula uma linha
console.log(`ARRAY INVERTIDO`);

let numerosTeste = [1, 2, 3, 4, 5];

// Função imprimirInverso
function imprimirInverso (arr){
    for(let i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
};

console.log(); //Pula uma linha
console.log(`Array antes da inversão: [${numerosTeste}]`);

console.log(); //Pula uma linha
console.log(`Return da função imprimirInverso():`);
imprimirInverso(numerosTeste); // Chamada da função imprimirInverso()

//Função inverter
function inverter(arr){
    return arr.reverse();
};

console.log(); //Pula uma linha
console.log(`Return da função inverter(): [${inverter(numerosTeste)}]`); // Chamada da função inverter()

// SOMA DE ARRAYS
console.log(); //Pula uma linha
console.log(`SOMA DE ARRAYS`);

// Função somar array
function somarArray(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i]; // soma = soma + arr[i]
    }
    return soma;
};

console.log(); //Pula uma linha
console.log(`Array a ser somado: [${numerosTeste}]`);

console.log(); //Pula uma linha
console.log(`Soma do Array utlizando a função somarArray(): ${somarArray(numerosTeste)}`); // Chamada da funcão somarArray()

//Somar Array com Reduce
function somarArray2(arr){
    console.log(arr.reduce((acc, crr) => acc += crr, 0))
};

console.log(); //Pula uma linha
console.log(`Soma do Array utlizando a função somarArray2() com reduce: ${somarArray(numerosTeste)}`); // Chamada da funcão somarArray() com reduce()


// SIMULAÇAO DO ARRAY JOIN
console.log(); //Pula uma linha
console.log(`SIMULAÇAO DO ARRAY JOIN`);

let letrasTeste = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"];
console.log(); //Pula uma linha
console.log(`Array que vai sofrer o join: [${letrasTeste}]`);

// Função join
function join(arr){
    let stringConcatenada = "";
    for(i = 0;i < arr.length; i++){
        stringConcatenada += arr[i];
    }
    return stringConcatenada;
};

console.log(); //Pula uma linha
console.log(`Resultado da String utilizando função join(): ${join(letrasTeste)}`); // Chamada da função join()

// COLEÇÕES DE FILMES E MAIS...
console.log(); //Pula uma linha
console.log(`COLEÇÕES DE FILMES E MAIS...`);

// Array de filmes 1
let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
console.log(); //Pula uma linha
console.log(`Primeiro array de filmes: [${filmes}]`);

// Função que capitaliza todos os elementos do array
function goUpper(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}

console.log(); //Pula uma linha
console.log(`Resultado do array após função goUpper(): [${goUpper(filmes)}]`); // Chamada da função goUpper()

// Array de filmes 2
let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
console.log(); //Pula uma linha
console.log(`Segundo array de filmes: [${filmes2}]`);

// juntaArray utilizando push
function juntaArray(arr1, arr2){
    for(let i = 0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1;
};

console.log(); //Pula uma linha
console.log(`Resultado da junção dos Arrays com juntaArray(): [${juntaArray(filmes, filmes2)}]`); // Chamada da função juntaArray() com push()

// juntaArray utilizando Concat
function juntaArray2(arr1, arr2){
    let arr;
    arr = arr1.concat(arr2);
    return arr;
};

// Deletar elemento e salvar em uma variável
let backup; // Variável que vai armazenar o excluído
console.log(); //Pula uma linha
console.log(`Impressão do Array de Filmes antes do pop(): [${filmes}]`);

backup = filmes.pop();

console.log(); //Pular uma linha
console.log(`Impressão do Array de Filmes depois do pop(): [${filmes}]`);
console.log(); //Pular uma linha
console.log(`Variável de backup = ${backup}`);

// Arrays de classificação
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

console.log(); //Pular uma linha
console.log(`Arrays que vão ser comparados: [${asiaScores}] e [${euroScores}]`);

function comparaNota(arr1, arr2){
    // Comparação
    if(arr1.length == arr2.length){
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] != arr2[i])
                console.log(`${arr1[i]} é diferente de ${arr2[i]}`);
            else
                console.log(`${arr1[i]} é igual a ${arr2[i]}`);
        }
    }
}

console.log(); //Pular uma linha
console.log(`Comparando os Arrays:`);

console.log(); //Pular uma linha
comparaNota(asiaScores, euroScores);