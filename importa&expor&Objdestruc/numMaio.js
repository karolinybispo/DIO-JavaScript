let {get, prints} = require("./funAuxilia2"); // pelo q entendi, estou importando e fiz desustrucao do obj

const numerosSorteados = [];

for(let i = 0; i< 5; i++){
    const numerosSorteado = get();
    numerosSorteados.push(numerosSorteado);
}

prints(numerosSorteados);

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if(numerosSorteado > maiorValor){
        maiorValor = numerosSorteado;
    }
}

prints(maiorValor);