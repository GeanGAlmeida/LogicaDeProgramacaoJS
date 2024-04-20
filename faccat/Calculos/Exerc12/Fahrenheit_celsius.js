/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius

Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F*/

var fahrenheit = parseFloat(prompt("Digite um valor em Fahrenheit"))

var celsius = (fahrenheit - 32) / 1.8

alert("A converção de " +fahrenheit+ " para Celsius é "+ celsius)