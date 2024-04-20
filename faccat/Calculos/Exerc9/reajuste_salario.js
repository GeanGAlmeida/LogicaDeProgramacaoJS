/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário.*/

var salario = parseFloat(prompt("Digite o salario atual do funcionario"))
var reajuste = parseFloat(prompt("Digite o valor da porcentagem"))

var novo_salario = salario + (reajuste / 100 * salario)

alert("O novo salario do funcionario agora é "+ novo_salario)