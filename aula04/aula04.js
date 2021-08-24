//* Aula 04 - 16/08/2021
//* Variáveis e Tipagem

//* Tipos de variáveis

//* Exercício - Mesas de trabalho (Room 6)

//* Nome     Sobrenome   Idade      Peso(KG)    Altura      Plano
//  José     da Silva    27         83.5        1.70        Ouro
//  Carlos   de Souza    28         80.1        1.76        Diamante
//  Aline    Ferreira    33         63.7        1.53        Não Possui
//  Ana      Paula       26         55.0        1.62        Prata
//* Strings  String      Number     Number      Number      String(Can be NULL)

//* Resolução 1

//José
let nomeJ = "José da Silva";
let idadeJ = 27;
let pesoJ = 83.5;
let alturaJ = 1.7;
let planoJ = true;
let imcJ = pesoJ/(alturaJ*alturaJ);
console.log(`${nomeJ} tem ${idadeJ} anos e seu índice de massa corporal é de ${imcJ.toFixed(2)}`);

//Carlos
let nomeC = "Carlos de Souza";
let idadeC = 28;
let pesoC = 80.1;
let alturaC = 1.76;
let planoC = true;
let imcC = pesoC/(alturaC*alturaC);
console.log(`${nomeC} tem ${idadeC} anos e seu índice de massa corporal é de ${imcC.toFixed(2)}`);

//Aline
let nomeAl = "Aline Ferreira";
let idadeAl = 33;
let pesoAl = 63.7;
let alturaAl = 1.53;
let planoAl = false;
let imcAl = pesoAl/(alturaAl*alturaAl);
console.log(`${nomeAl} tem ${idadeAl} anos e seu índice de massa corporal é de ${imcAl.toFixed(2)}`);

//Ana
let nomeA = "Ana Paula";
let idadeA = 26;
let pesoA = 55;
let alturaA = 1.62;
let planoA = true;
let imcA = pesoA/(alturaA*alturaA);
console.log(`${nomeA} tem ${idadeA} anos e seu índice de massa corporal é de ${imcA.toFixed(2)}`);

//* Resolução 2

//Arrays de dados
const nome = ["José da Silva", "Carlos de Souza", "Aline Ferreira", "Ana Paula"];
const idade = [27, 28, 33, 26];
const peso = [83.5, 80.1, 63.57, 55];
const altura = [1.7, 1.76, 1.53, 1.62];
const plano = [true, true, false, true];

//Ciclo de repetição
for (let i = 0; i < 4; i++){
    // Função que calcula o IMC
    let imc = (peso, altura) => {return peso/(altura ** 2)}
    console.log(`${nome[i]} tem ${idade[i]} anos e seu índice de massa corporal é de ${imc(peso[i], altura[i]).toFixed(2)}`);
};