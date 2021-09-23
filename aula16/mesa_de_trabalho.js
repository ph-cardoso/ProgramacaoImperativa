// Luana
// Marco Thulio
// Daniel
// Pedro Cardoso


// Solução 1
function FizzBuzz(a, b){
    for(let i = 1; i<=100; i++){
        // Se 'i' for múltiplo de 'a'
        if(i%a === 0 && i%b === 0) {
            console.log("FizzBuzz");
        } else if(i%a === 0) {
            console.log("Fizz");
        } else if(i%b === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Chamada da função
// FizzBuzz(3, 5);

// Solução 1 Avançado
function FizzBuzz2(a, b, palavra1, palavra2){
    for(let i = 1; i<=100; i++){
        // Se 'i' for múltiplo de 'a'
        if(i%a === 0 && i%b === 0) {
            console.log(palavra1 + palavra2);
        } else if(i%a === 0) {
            console.log(palavra1);
        } else if(i%b === 0) {
            console.log(palavra2);
        } else {
            console.log(i);
        }
    }
}

// FizzBuzz2(3, 5, "Java", "Script");

// Solução 2
function FizzBuzz3(a, b, palavra1, palavra2){
    let display = "";
    let isPalavra;
    for(let i = 1; i<=100; i++){
        display = "";
        isPalavra = false;
        if(i%a === 0){
            display += palavra1; //display = display + palavra1
            isPalavra = true;
        }
        if(i%b === 0){
            display += palavra2;
            isPalavra = true;
        }
        isPalavra ? console.log(display) : console.log(i);
    }
}

FizzBuzz3(3, 5, "Java", "Script");