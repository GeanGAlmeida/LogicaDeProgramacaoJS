/**Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à
soma dos quadrados dos três valores lidos */

let valorA = parseInt(prompt("Digite o primeiro valor"))
let valorB = parseInt(prompt("Digite o segundo valor"))
let valorC = parseInt(prompt("Digite o terceiro valor"))

valorA = valorA ** 2
valorB = valorB ** 2
valorC = valorC ** 2

let soma = valorA + valorB + valorC

alert(`A soma do quadrado de todos os valores é ${soma}`)