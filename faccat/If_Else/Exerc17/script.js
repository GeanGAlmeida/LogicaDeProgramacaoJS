/*Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.*/

var nota1 = parseFloat(prompt("Digite a primeira nota"))
var nota2 = parseFloat(prompt("Digite a segunda nota"))

var media = (nota1 + nota2)/2

if(media >= 6){
    alert("Aluno foi aprovado com uma media "+media)
}
else{
    alert("O aluno foi reprovado com uma medio "+ media)
}