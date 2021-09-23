const frutas = ['Maçã', 'Banana', 'Melancia']

// forEach() -> Método que percorre cada elemento

function listaCompras(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}
frutas.forEach(listaCompras)
//A impressão é:
//1 - Maçã
//2 - Banana
//3 – Melancia


const frutas = ['Maçã', 'Banana', 'Melancia'];

// for(let i =0; i< frutas.length; i++) {
//     console.log(frutas[i]);
// }

frutas.forEach((elemento, indice) => {console.log(`${indice + 1} - ${elemento}`)});

// for(const element of frutas)
