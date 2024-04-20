/**Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME = COMPRIMENTO * LARGURA * ALTURA. */

let comprimento = parseInt(prompt("Digite o comprimento da caixa"))
let largura = parseInt(prompt("Digite a largura da caixa"))
let altura = parseInt(prompt("Digite o altura da caixa"))

let volume = comprimento * largura * altura

alert(`O volume da caixa é ${volume}`)