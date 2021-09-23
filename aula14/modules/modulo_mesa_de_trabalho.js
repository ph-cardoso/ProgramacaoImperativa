//Função de soma
export function soma(n1, n2){
    return n1+n2;
}

//Função de subtração
export function subtrair(n1, n2){
    return n1-n2;
}

// Função de Multiplicação
export function multiplicar(n1, n2){
    return n1*n2;
}

// Função de Dividir
export function dividir(n1, n2){
    return n1/n2;
}

// Função para transformar em letras maiúsculas
export function maiuscula(palavra){
    const stringAux = palavra.toUpperCase();
    return stringAux;
}

// Função para transformar em letras minúsculas
export function minuscula(palavra){
    const stringAux = palavra.toLowerCase();
    return stringAux;
}

// Exportação das funções via module.exports
// module.exports = {soma, subtrair, multiplicar, dividir, maiuscula, minuscula};