let notas = [];

notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}// n hora de debugar eh possivel ver que no momento do for, ele entra e faz o loop, ai volta e vai primeiro no i++ dps vai ver se a condicao ainda eh true, se for]
// volta p linhas 13-14 e continua encontrar o 5.
const media = soma/notas.length;
console.log(soma);
console.log(media);