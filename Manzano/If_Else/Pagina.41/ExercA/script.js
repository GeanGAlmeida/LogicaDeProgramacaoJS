/**Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor */

var num1 = parseInt(prompt("Digite um numero"))
var num2 = parseInt(prompt("Digite outro numero"))

if(num1 > num2){
   var diferenca = num1 - num2
   alert(`A diferença dos numeros é ${diferenca}`)
}
else{
    var diferenca = num2 - num1
   alert(`A diferença dos numeros é ${diferenca}`)
}