function filtrarDados() {
    const lista = [

        { nome: "luis", idade: 26 },
    
        { nome: "norma", idade: 16 },
    
        { nome: "daiana", idade: 26 },
    
        { nome: "jorge", idade: 16 },
    
        { nome: "kauan", idade: 16 },
    
        { nome: "charles", idade: 26 },
    
        { nome: "marco", idade: 16 },
    
        { nome: "bruno", idade: 16 }
    
    ];

    const menoresIdade = lista.filter((menor) => {
        
        if(menor.idade < 18) {
            return menor;
        }

    });

    const maioresIdade = lista.filter((maior) => {
        if(maior.idade >= 18) {
            return maior;
        }
    });

    console.log(menoresIdade);
    console.log(maioresIdade);

}

filtrarDados();