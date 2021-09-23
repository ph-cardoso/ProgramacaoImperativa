const amigos = ["Daniel", "Guilherme", "Vanessa", "Isnard", "Luiz"];
const pizza = ["fatia1", "fatia2", "fatia3", "fatia4"];

amigos.forEach((elemento, index) => {
    if(index < pizza.length)
        console.log(`${elemento} recebe ${pizza[index]}`);
    else
        console.log(`${elemento} ficou sem pizza`);
});