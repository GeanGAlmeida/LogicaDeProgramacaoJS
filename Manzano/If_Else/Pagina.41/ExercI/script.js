/**Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem
informando se o número é par ou ímpar. */

let num

num = parseInt(prompt("Digite um número inteiro: "))

if (num % 2 == 0) {
   alert(`O número ${num} é par`)
} else {
    alert(`O número ${num} é impar`)
}
