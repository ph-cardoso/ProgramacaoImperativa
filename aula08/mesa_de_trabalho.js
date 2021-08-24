//* Function podeSubir()
function podeSubir(altura, acompanhada)
{
    if(altura >= 1.4 && altura < 2)
        console.log(`Acesso autorizado!`);
    else if(altura > 1.2 && altura < 1.4)
        acompanhada ? console.log(`Acesso autorizado com acompanhante!`) : console.log(`Acesso não autorizado por ausência de acompanhante!`);
    else
        console.log(`Acesso não autorizado!`);
}


//* Teste da função podeSubir()
podeSubir(1.4, true);   // Expected: "Acesso autorizado!"
podeSubir(1.5, false);  // Expected: "Acesso autorizado!"
podeSubir(1.3, true);   // Expected: "Acesso autorizado com acompanhante!"
podeSubir(1.3, false);  // Expected: "Acesso não autorizado por ausência de acompanhante!"
podeSubir(1.1, true);   // Expected: "Acesso não autorizado"
podeSubir(1.1, false);  // Expected: "Acesso não autorizado"