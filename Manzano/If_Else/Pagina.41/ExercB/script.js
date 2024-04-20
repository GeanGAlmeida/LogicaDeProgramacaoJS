/**Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. */

let valor = parseInt(prompt("Digite um valor(caso ele seja negativo ele sera transformado em positivo)"))

if (valor < 0) {
    valor = valor * -1
  }
   
  alert (`O Valor sendo Positivo é: ${valor}`)
  