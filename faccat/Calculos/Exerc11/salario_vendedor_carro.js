/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.*/


var carros_vendidos = parseInt(prompt("Quantos carros o funcionario vendeu"))
var valor_total = parseFloat(prompt("Digite o valor total de suas vendas"))
var salario_fixo = parseFloat(prompt("Qual o salario fixo do funcionario"))
var comissao_fixo = parseFloat(prompt("Digite a comissao fixa por carro vendido"))

var ganho_valor_total = valor_total * 5 / 100

var salario_final =  ganho_valor_total + salario_fixo + comissao_fixo

alert("O salario final do funcionario é " +salario_final)