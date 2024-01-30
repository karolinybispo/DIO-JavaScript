

// nesse arquivo estou seguindo o exerci do prof, nao continuei no funcoes-auxiliares para nao confundir o que ja tinha la.

const entrada = [5,50,89,98,45];
let i = 0;

function get(){
    const valor = entrada[i];
    i = i + 1; //ou i++
    return valor;
}



function prints(texto){
    console.log(texto);
}

module.exports = {get, prints};// estou exportando, sem a permissao, nao consigo usar em outro arq