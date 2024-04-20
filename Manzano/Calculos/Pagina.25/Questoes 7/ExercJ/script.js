/**Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira */

let cotacaoDolar = parseFloat(prompt("Qual a cotação do dolar"))
let quantidadeDolar = parseFloat(prompt("Quantos dolares voce tem em mãos para a converção"))

let convecaoReal = cotacaoDolar * quantidadeDolar

alert(`${quantidadeDolar}$ dolares convertidos para real da R$${convecaoReal}`)