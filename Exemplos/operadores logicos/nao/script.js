//Operador Logico não  !
 
/**let idade
let condicao
 
idade=parseInt(prompt("Digite Sua idade"));
condicao=prompt("Escreva uma das condições: Habilitado ou Não Habilitado")
 
if (!(idade>=18 || condicao =="Habilitado")){
    alert("Pode dirigir")
}else{
    alert("Não pode dirigir")
}
*/

//A saida normalmente seria Verdadeira, mas com o operador logico !(Não) a saida, que é o resultado, sera Falsa


let idade
let condicao
 
idade=parseInt(prompt("Digite Sua idade"));
condicao=prompt("Escreva uma das condições: Habilitado ou Não Habilitado")
 
if (!(idade>=18 && condicao =="Habilitado")){
    alert("Pode dirigir")
}else{
    alert("Não pode dirigir")
}