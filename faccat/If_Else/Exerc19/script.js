/*Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.*/

var num1 = parseInt(prompt("Digite o primeiro valor"))
var num2 = parseInt(prompt("Digite o segundo valor"))

if(num1 > num2){
    alert(num1+" é maior que o "+num2)
}else{
    alert(num2+" é maior que o "+num1)
}