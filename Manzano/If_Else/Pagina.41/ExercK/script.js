/** Elaborar um programa que efetue a leitura de um determinado valor inteiro, e efetue a sua
apresentação, caso o valor não seja maior que três.*/

let num = parseInt(prompt("Digite um valor maior que 3"))

if (num > 3) {
    alert(`O valor ${num} é maior que 3`);
} else {
    alert(`O valor ${num} não é maior que 3`);
}