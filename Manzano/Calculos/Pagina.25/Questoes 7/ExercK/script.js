/**Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana. */

let cotacaoDolar = parseFloat(prompt("Qual a cotação do dolar"))
let quantidadeReais= parseFloat(prompt("Quantos reais voce tem em mãos para a converção"))

let convecaoDolar = quantidadeReais / cotacaoDolar

alert(`R$${quantidadeReais} convertidos para dolares da ${convecaoDolar}$`)