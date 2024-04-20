/**Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
total do somatório da fatorial de cada valor lido. */

let i = 1;
let cont = 1;
let somaFatorial = 1;
let fatorial;
let totalFatorial = 0;

do {
    fatorial = parseInt(prompt("Digite um numero:"))
    cont = fatorial
    do {
        somaFatorial *= fatorial
        fatorial -=1
        cont--
    } while (cont > 0);
    totalFatorial += somaFatorial
    somaFatorial = 1
    i++
} while (i <= 15);
console.log(totalFatorial)