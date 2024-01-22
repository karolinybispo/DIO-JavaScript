
let produto = 100;
 
let formaPag = "";


if( formaPag === "dinheiro" || formaPag === "PIX"){
    let descon = produto * 15 / 100;
    let resul = produto - descon;
    console.log("recebe 15% de desconto: " + resul + "reais");

}   else if (formaPag === "debito"){
        let descon = produto * 10 / 100;
            let resul = produto - descon;
                console.log("DEBITO: recebe 10% de desconto,",resul,"pagou ");
}       
        else if(formaPag === "duas vezes"){
            let duasVeses = produto / 2;
                console.log("feito em duas vezes: ", duasVeses, ": valor da primeira parcela");
        }
            else{
                let MaisDe2Veses = produto * 10 / 100;
                        let juros = produto + MaisDe2Veses;
                            let result = juros / 3;
                        console.log("feito em mais de 2 vezes: ", result, ": primeira parcela");
            }
