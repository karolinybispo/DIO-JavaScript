// exercicos praticar classes e obejtos em js

//exercicio para calcular o quanto gastara para percorrer um percurso

class Carro{
    nome;
    cor;
    gastoComb; //gasto medio do combustivel por km rodado
    
    constructor(nome,cor,gastoComb){
        this.nome = nome;
        this.cor = cor;
        this.gastoComb = gastoComb;
    }

    gastoPercurso(km, precoCombus){
        let gastoVIAGEM = (km / this.gastoComb) * precoCombus;
        console.log(gastoVIAGEM);
    }
}
let mercedes = new Carro("a4", "preto", 1/10);// esta 1/10 pq esse carro faz 10km/l, porem quero quantos litros ele faz por km, sendo assim pego 1 l e divido pelo km em 1 litro.
mercedes.gastoPercurso(790,5.19);
