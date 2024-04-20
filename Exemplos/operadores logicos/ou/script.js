//Operador Logico ou ||
 
let idade = 0
let condicao
 
idade=parseInt(prompt("Digite Sua idade"));
condicao=prompt("Escreva uma das condições: Habilitado ou Não Habilitado")
 
if(idade>=18 || condicao =="Habilitado"){
    alert("Pode dirigir")
}else{
    alert("Não pode dirigir")
}