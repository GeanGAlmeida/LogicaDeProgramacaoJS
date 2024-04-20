/**Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */

let mult
let numeroTabuada = parseInt(prompt("Digite um numero para ver a sua tabuada"));

console.log(`A tabuada do numero ${numeroTabuada} é:`);

for(let i = 1; i <= 10; i++){
    mult = numeroTabuada * i
    console.log(`${numeroTabuada} X ${i} = ${mult}`)
}