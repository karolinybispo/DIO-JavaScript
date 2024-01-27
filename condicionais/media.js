//CALCULANDO MEDIAS

let not1 = 90;
let not2 = 95;
let not3 = 80;

let resul = (not1 + not2 + not3) / 3;

if(resul < 50){
        console.log(resul.toFixed(0),": reprovado");

} else if( resul > 50 && resul < 70 ){// ** A linguegem le da esquerda para a direita. **
    // para ver se algo esta entre uma coisa  e outra (resul eh menor ou maior que 7) precisa usar &&.
    console.log(resul.toFixed(0),": recuperacao");
}   else{
    console.log(resul.toFixed(0),": aprovado");
}