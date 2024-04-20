// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
// dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias

var ano = parseInt(prompt("Digite quantos anos voce tem"))
var mes = parseInt(prompt("Digite quantos meses passaram desde do seu ultimo aniverdario"))
var dia = parseInt(prompt("Digite quantos dias passou desde do seu ultimo mêsversario"))

dias_totais = ano * 365 + mes * 30 + dia

alert("Voce tem "+ dias_totais + " dias de vida.")