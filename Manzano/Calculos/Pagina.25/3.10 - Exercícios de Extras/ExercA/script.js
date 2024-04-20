/**Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e
D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro
valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma
(variável S) do segundo com o quarto valor */

let valorA = parseInt(prompt("Digite o primeiro valor"))
let valorB = parseInt(prompt("Digite o segundo valor"))
let valorC = parseInt(prompt("Digite o terceiro valor"))
let valorD = parseInt(prompt("Digite o quarto valor"))

let produto = valorA * valorC
let soma = valorB + valorD

alert(`A produto do primeiro valor com o terceiro valor é ${produto}`)
alert(`A soma do segundo com o quarto valor é ${soma}`)