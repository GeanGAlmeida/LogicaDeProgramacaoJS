/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).*/

var ano_atual = parseInt(prompt("Digite o ano atual"))
var ano_nascimento = parseInt(prompt("Digite o ano de seu nascimento"))

var idade = ano_atual - ano_nascimento

if(idade < 16){
    alert("Voce tem "+idade+" anos Voto proibido")
}
else if(idade < 18){
    alert("Voce tem "+idade+" anos Voto opcional")
}
else{
    alert("Voce tem "+idade+" anos Voto obrigatorio")
}