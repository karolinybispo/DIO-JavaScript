let peso = 53;
    let altura = 1.67;
        let imc = peso / (altura * altura);

        if(imc < 18.5){
            console.log("abaixo do peso");
        } else if(imc >= 18.5 && imc <= 25){
            console.log("peso normal");

        }   else if(imc >= 25 && imc <= 30 ){
            console.log("acima do peso");
        }       
                else if(imc >= 30 && imc <=40){
                    console.log("obeso");
                }
                    else{
                        console.log("obesidade grave");
                    }