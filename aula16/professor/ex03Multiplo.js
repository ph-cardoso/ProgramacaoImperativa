// Aula 16
// Arrow Function

let multiplo = (a,b) => {
    let resto = a % b; //mod
    return resto === 0;
};

// console.log(multiplo(6,3));

//console.log(multiplo(2,2));

if(multiplo(51,10)==true) {
    console.log("É MULTIPLO");
} else {
    console.log("NÃO É MULTIPLO");
}