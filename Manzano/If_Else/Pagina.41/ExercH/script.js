/** Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores*/


let n1, n2, n3, n4, n5;
let maior = 0, menor = 0;

n1 = parseInt(prompt("Digite o primeiro numero: "));
n2 = parseInt(prompt("Digite o segundo numero: "));
n3 = parseInt(prompt("Digite o terceiro numero: "));
n4 = parseInt(prompt("Digite o quarto numero: "));
n5 = parseInt(prompt("Digite o quinto numero: "));

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    maior = n1;
} else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    maior = n2;
} else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    maior = n3;
} else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    maior = n4;
} else if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
    maior = n5;
}

if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
    menor = n1;
} else if (n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5) {
    menor = n2;
} else if (n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5) {
    menor = n3;
} else if (n4 < n1 && n4 < n2 && n4 < n3 && n4 < n5) {
    menor = n4;
} else if (n5 < n1 && n5 < n2 && n5 < n3 && n5 < n4) {
    menor = n5;
}

alert(`O maior numero digitado foi ${maior} e o menor foi o ${menor}`);