// percorra numeros e imprima os pares
let num =[23,20,45,23,12,10,2,3974,8390,7381];

for (let i = 0; i < num.length; i++) {
    let numPar = num[i] % 2;// a cada loop um numero individual do array sera calculado e passa p proxima linha
    if (numPar === 0){ // aqui o que foi calculado entra no if p ver se eh par, se for vai mostrar no console.
        console.log(num[i]); // nessa linha mostra somente os numeros pares. O indice "i" vai no array "num" e imprimi os numeros pares.
    }
    //else{
      //  console.log("impar: ", num[i]);
    //}
}
//EXPLICACAO:
//dentro do for quero interar sobre cada elemneto do array "num". A variavel "i" eh usada como indice p acessar cada elemento no array. Quando uso num[i] no console, estou aceesando os pares individualmente.









//NOTE ESSE CASO
//for (let i = 0; i < num.length; i++) {
  //  let numPar = num[i] % 2;
    //if (numPar === 0){ 
    //}
    // COLOQUEI O "i" que eh o indici, ao coloca-lo no console vou imprimir os indices pares no array