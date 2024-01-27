//criando objeto
const talher = {
    nome: "faca",
    objtivo: "cortar",
};
        console.log(talher);
         //adc chave valor fora do obj
            talher.cor = "vermelha";
    //mostrando de 3 jeitos diferentes
    console.log(talher.nome);
    console.log(talher.objtivo);
    console.log(talher);
    

    //sabendo usar objeto com metodo:
    let carro = { //objeto

        marca: 'Toyota', //chave-valor (propriedade)
 
        modelo: 'Corolla', 
 
        ligar: function() { // funcao/metodo com nome de chave
 
            console.log('O carro está ligado.'); 
 
        } 
 
    }; 
 
   
 
    carro.ligar(); // Chama o método ligar do objeto carro 
    console.log(carro.marca);