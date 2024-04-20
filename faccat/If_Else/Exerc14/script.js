/*Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
contrário escrever NÃO É MAIOR QUE 10!*/

var num = parseInt(prompt("Digite um numero"))

if(num > 10){
    alert("Esse numero é maior que 10")
}
else if(num == 10){
    alert("Esse numero é o 10")
}
else{
    alert("Esse numero é menor que 10")
}