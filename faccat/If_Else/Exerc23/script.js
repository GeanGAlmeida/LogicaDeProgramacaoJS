/**Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
- para sexo masculino: peso ideal = (72.7 * altura) - 58
- para sexo feminino: peso ideal = (62.1 * altura) - 44.7 */

var nome = prompt("Fale seu nome")
var altura = parseFloat(prompt("Qual a sua altura"))
var sexo = prompt("Fale o seu sexo digitando M-Masculino ou F-Feminino")

if(sexo == "M"){
    var pesoIdeal = (72.7 * altura) - 58
    alert(nome+" seu peso ideial é "+pesoIdeal)
}
else if(sexo == "F"){
    var pesoIdeal = (62.1 * altura) - 44.7
    alert(nome+" seu peso ideial é "+pesoIdeal)
}