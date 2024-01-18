//BOOLEAN - treu e false
const garrafaCinza = true;
const garrafaVerde = false;


//VERIFICANDO SE UM NUMERO EH PAR (Se o resto da divisao for 0, eh par):
const num = 11;
const ehPar = num % 2; // o % eh um operador de resto, ao querer saber se um numero eh par utilizo o %
console.log(ehPar);

//EXEMPLO DE BOOLEAN
    const vari = 34 / 2 === 9;
        console.log(vari);

    let temCarro = true;
    let temCasa = false;
        let condicaoFinal = temCarro && !temCasa; // && é o operador lógico "E", ! é o operador de negação
            console.log(condicaoFinal); // Saída: true


                let numero1 = 10;
                let numero2 = 5;
                     let resultadoMaiorQue = numero1 > numero2; // Retorna true se numero1 for maior que numero2
                        console.log(resultadoMaiorQue); // Saída: true
    




//CONDICIONAL IF
    if(vari) { // se vari for true, dentro de parenteses sera executado
        console.log("a conta resulta em 9");
    }
    else {
        console.log("o resultado nao eh = a 9");
    }