// =================================================================== BANCO ==================================================================
// Função construtora do objeto Conta
function Conta (numero, tipo, saldo, titular){
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

// Criação de 10 instâncias do objeto Conta
const conta1 = new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte");
const conta2 = new Conta(1183971869, "Conta Poupança", 8675, "Ramon Connell");
const conta3 = new Conta(9582019689, "Conta Poupança", 27363, "Jarret Lafuente");
const conta4 = new Conta(1761924656, "Conta Poupança", 32415, "Ansel Ardley");
const conta5 = new Conta(7401971607, "Conta Poupança", 18789, "Jacki Shurmer");
const conta6 = new Conta(630841470, "Conta Corrente", 28776, "Jobi Mawtus");
const conta7 = new Conta(4223508636, "Conta Corrente", 2177, "Thomasin Latour");
const conta8 = new Conta(185979521, "Conta Poupança", 25994, "Lonnie Verheijden");
const conta9 = new Conta(3151956165, "Conta Corrente", 7601, "Alonso Wannan");
const conta10 = new Conta(2138105881, "Conta Poupança", 33196, "Bendite Huggett");

// Criação de um array que contém os 10 objetos instanciados
const listContas = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10];

// Objeto banco
const banco = {
    clientes: listContas,
    consultarClientes(nome){
        for(const elemento of this.clientes){
            if(elemento.titular === nome){
                console.table(elemento);
                return;
            }
        }
        console.log("Conta não encontrada...");
    },
    deposito(nome, valor){
        for(const elemento of this.clientes){
            if(elemento.titular === nome){
                elemento.saldo += valor;
                console.log(`Depósito realizado com sucesso. Seu novo saldo é: R$ ${elemento.saldo}`);
                return;
            }   
        }
        console.log("Conta não encontrada...");
    },
    saque(nome, valor){
        for(const elemento of this.clientes){
            if(elemento.titular === nome){
                if(elemento.saldo - valor < 0){
                    console.log(`Fundos insuficientes.`);
                    return;
                } else{
                    elemento.saldo -= valor;
                    console.log(`Extração realizada com sucesso. Seu novo saldo é: R$ ${elemento.saldo}`);
                    return;
                }
            }   
        }
        console.log("Conta não encontrada...");
    }
}

console.log(`Teste do método de depósito:`);
banco.deposito("Alonso Wannan", 5000);
banco.consultarClientes("Alonso Wannan");

console.log(`\nTeste do método de saque:`);
banco.saque("Bendite Huggett", 30000);
banco.consultarClientes("Bendite Huggett");

// ================================================================ PARTE EXTRA ================================================================

// ============================================================= PROPRIEDADE ÚNICA =============================================================
const arr = [ { nome: "Lean", idade: 27 }, { nome: "Eze", idade: 49} ];

function propriedadeUnica(array, prop){
    const arrayFiltered = [];

    for(const elemento of array){
        // Copia o objeto passado para um novo objeto
        let objectAux = JSON.parse(JSON.stringify(elemento));
        // Exclui propriedades que não interessam do objeto copiado
        for(const property in objectAux){
            if(property !== prop){
                delete objectAux[property];
            }
        }
        arrayFiltered.push(objectAux);
    }

    return arrayFiltered;
}

console.log(`\nTeste da função propriedade única`);
console.log(propriedadeUnica(arr, "idade"));

// =========================================================== CALCULADORA DE NOTAS ============================================================

// Função construtora de Aluno
function Aluno(numero, numeroArquivo, listaNotas){
    this.numero = numero,
    this.numeroArquivo = numeroArquivo,
    this.listaNotas = listaNotas,
    this.calculaMedia = function(){
        let soma = 0;
        for(const e of listaNotas){
            soma += e;
        }
        return soma/listaNotas.length;
    };
    this.isAprovado = function(nota){
        if(this.calculaMedia() < nota)
            return "Reprovado";
        else
            return "Aprovado";
    };
}

// Instância de aluno
const aluno1 = new Aluno(1, 1212, [7.5, 7.5, 7.5]);

// Chamada dos métodos
console.log(`\nTeste dos métodos de Aluno:`);
console.log(aluno1.calculaMedia());
console.log(aluno1.isAprovado(6));