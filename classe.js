class Pessoa{ // a classe pessoa define como vao ser as pessoas p que elas sejam instanciadas
        nome;
        idade;
        
        // dentro da classe nao preciso colocar function quando crio o metodo
        descrever(){
                console.log("ele anda");
        }
}

        let karol = new Pessoa();// instancia(objeto) da classe Pessoa
        karol.nome = "karolinda";// o obj pode usar os atributos 
        karol.idade = "21"; // 
        karol.descrever(); // obj pode usar o metodo
                 console.log(karol); // quero que a instancia karol seja mostrada

                 //UTILIZANDO o construtor
                 class Carro{ // a classe pessoa define como vao ser as pessoas p que elas sejam instanciadas
                        nome;
                        cor;
                      //EXEMPLO do construtor  
                        constructor(name, color){
                        this.nome = name;
                        this.cor = color;
                        }

                        // dentro da classe nao preciso colocar function quando crio o metodo
                        descrever(){
                                console.log("ele corre");
                        }
                }
                        let Wolksva = new Carro("audi", "azul");
                        Wolksva.descrever();
                        console.log(Wolksva);