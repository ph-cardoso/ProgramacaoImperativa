const precoSemTaxa = [1200, 340, 500, 38400, 500, 7060, 400, 1000];
const taxa = 1.21;
const precoComTaxa = [];

function guardarPrecoComTaxa(precoSemTaxa){
    for(let i = 0; i < precoSemTaxa.length; i++)
        precoComTaxa.push(precoSemTaxa[i] * taxa)
    return precoComTaxa;
};

//guardarPrecoComTaxa(precoSemTaxa);
console.log(`Meu array: ${guardarPrecoComTaxa(precoSemTaxa)}`);