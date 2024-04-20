/**Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10 */

let fatorialImpar = 10;
let fatorial;
let fatorialTotal = 1;


do {
    fatorialImpar--
    if(fatorialImpar % 2 != 0){
        fatorialTotal = 1
        fatorial = fatorialImpar
        do {
            fatorialTotal *= fatorial
            fatorial--
        } while (fatorial > 0);
        console.log(`O fatorial de ${fatorialImpar} é ${fatorialTotal}`)
    }
} while (fatorialImpar > 0);


