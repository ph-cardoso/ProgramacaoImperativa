//Função de soma
function soma(n1, n2){
    return n1+n2;
}

//Função de subtração
function subtrair(n1, n2){
    return n1-n2;
}

// Função de Multiplicação
function multiplicar(n1, n2){
    return n1*n2;
}

// Função de Dividir
function dividir(n1, n2){
    return n1/n2;
}

// Função para transformar em letras maiúsculas
function maiuscula(palavra){
    const stringAux = palavra.toUpperCase();
    return stringAux;
}

// Função para transformar em letras minúsculas
function minuscula(palavra){
    const stringAux = palavra.toLowerCase();
    return stringAux;
}

// Exportação das funções via module.exports
module.exports = {soma, subtrair, multiplicar, dividir, maiuscula, minuscula};