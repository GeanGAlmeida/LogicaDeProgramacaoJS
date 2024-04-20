/**Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10. */

let fatorial_total, i, cont;
for (i = 10; i >= 1; i--) {
    if (i % 2 !== 0) {
        fatorial_total = 1;
        for (cont = i; cont >= 1; cont--) {
            fatorial_total *= cont;
        }
        console.log("O fatorial de " + i + " é " + fatorial_total);
    }
}
