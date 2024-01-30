//PARA eu usar as FUNCOES DO OUTRO ARQUIVO, uso a funcao require:
const funcoes = require('./funcoes-auxiliares'); // ESTOU IMPORTANDO.
// estou IMPORTANDO o que esta sendo exportado do arquivo "funcoes-auxiliares".

console.log(funcoes);// mostrando

console.log(funcoes.gets()); //mostrando especificamente.








/* Object Destructuring (desestriturando o obj):*/
// me ajuda a acessar diretamente as propriedades do objeto, assim nao tem necessidade de escrever o "objeto.o-q-preciso". Note o ex:
let pessoa = {
    nome: "soraia",
    idade: 14,
    sobrenome: "ayla"
}
//ativando o Object Destructuring, pois criei variaveis que vao receber os valores do objeto:
let { nome, idade, sobrenome} = pessoa; // criei variaveis e estou atribuindo a elas os valores das propriedades que estao obj "pessoa".
                                    //"pessoa" eh o obj que sera usado para tirar os valores.

console.log(nome);
console.log(sobrenome);
console.log(idade);

// posso fazer isso tbm:
//let { nome, idade, sobrenome, estado = "minessota"} = pessoa // a propriedade "estado" nao esta no objeto pessoa, mas posso criar uma valores padrão quando necessário.


