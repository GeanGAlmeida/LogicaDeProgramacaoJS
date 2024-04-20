/**Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500. */
let i = 1;
let somaPares = 0;

do {
    if (i % 2 == 0) {
        somaPares += i;
    }
    i++;
} while (i <= 500);

console.log(somaPares);