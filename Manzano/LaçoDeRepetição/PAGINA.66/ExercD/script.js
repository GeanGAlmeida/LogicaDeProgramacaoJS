/**Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500. */

let soma = 0;

for(let i = 1; i <=500; i++){
    if(i % 2 == 0){
        soma += i
    }
}
console.log(`A somatória de todos os numeros pares de uma faixa de 1 a 500 é ${soma}`)