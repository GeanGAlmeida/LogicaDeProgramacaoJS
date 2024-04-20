/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores.*/

var total_eleitores = parseInt(prompt("Digite o total de eleitores"))
var votos_brancos = parseInt(prompt("Digite a quantidade de votos brancos"))
var votos_nulos = parseInt(prompt("Digite a quantidade e votos nulos"))
var votos_validos = parseInt(prompt("Digite a quantidade de votos validos"))

var percentual_brancos = parseFloat(votos_brancos / total_eleitores * 100)
var percentual_nulos = parseFloat(votos_nulos / total_eleitores * 100)
var percentual_validos = parseFloat(votos_validos / total_eleitores * 100)

alert("O percentual de votos brancos é " +percentual_brancos+"%")
alert("O percentual de votos nulos é " +percentual_nulos+"%")
alert("O percentual de votos validos é " +percentual_validos+"%")
