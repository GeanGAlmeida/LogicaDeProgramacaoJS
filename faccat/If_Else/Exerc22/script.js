/*A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva 
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
(considere que o mês possua 4 semanas exatas). */

var horas_trabalhadas = parseInt(prompt("Quantas horas foram trabalhadas no mes"))
var salario_hora = parseFloat(prompt("Qual é o valor pago pela hora"))

var hora_minima = 40 * 4

if(horas_trabalhadas > hora_minima){

    var hora_extra = horas_trabalhadas - hora_minima
    var salario_final = salario_hora * horas_trabalhadas + (hora_extra *(salario_hora * (0.5)))
    alert("O salario é de R$"+salario_final)
}
else{
    var salario_final = salario_hora * horas_trabalhadas
    alert("O salario é de R$"+salario_final)
}

