class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
     
    }
                    // meuIMC(peso, altura){
                    // let imc = peso / (altura * altura);
                    // console.log(imc);
                    //}

               //POSSO FAZER O meuIMC do jeito acima ou desse:
                meuIMC(){
                return this.peso / (this.altura * this.altura);}


                classiIMC(){
                 let imc = this.meuIMC();
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


                }}
let homem = new Pessoa("jose", 70, 1.90);

homem.classiIMC();