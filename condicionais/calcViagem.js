//RESOLVENDO DESAFIO

//CALCULANDO O VALOR DA VIAGEM:
let combusGaso = 5.19;
let combusEta = 3.19;
let gastMedio = 10; // 10km p gastar 1 litro
let dis = 740;

let carro = combusEta;
    if(carro){
        let resul = (dis / gastMedio) * combusEta;
console.log(resul.toFixed(0));
    }   
            else {
                let resul = (dis / gastMedio) * combusGaso;
                console.log(resul.toFixed(0));
    }


//alt(option) aperte ele no texto selecionada e usando a seta p cima ou baixo eles mudam de posicao
