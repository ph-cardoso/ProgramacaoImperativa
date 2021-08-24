// Função
function podeSubir(altura, seAcompanhado){
    if(altura >= 1.4 && altura < 2.0){
        console.log(`Acesso autorizado!`);
        return true;
    }
    else if(altura < 1.4 && altura >= 1.2 && seAcompanhado){
        console.log(`Acesso autorizado somente com acompanhante!`);
        return true;
    }
    else{
        console.log(`Acesso negado!`);
        return false;
    }
}

// Teste da função podeSubir()
podeSubir(1.4, true);       // Expected: "Acesso autorizado!"
podeSubir(1.5, false);      // Expected: "Acesso autorizado!"
podeSubir(1.3, true);       // Expected: "Acesso autorizado com acompanhante!"
podeSubir(1.35, false);     // Expected: "Acesso não autorizado por ausência de acompanhante!"
podeSubir(1.1, true);       // Expected: "Acesso não autorizado"
podeSubir(1.0, false);      // Expected: "Acesso não autorizado"