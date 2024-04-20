/**Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição */
 
let lerNota1 = parseFloat(prompt("Digite a 1º Nota: "))
let lerNota2 = parseFloat(prompt("Digite a 2º Nota: "))
let lerNota3 = parseFloat(prompt("Digite a 3º Nota: "))
let lerNota4 = parseFloat(prompt("Digite a 4º Nota: "))
 
let notasMedia = (lerNota1 + lerNota2 + lerNota3 + lerNota4) / 4
 
if (notasMedia >= 5) {
  alert (`O aluno foi Aprovado com a média de: ${notasMedia.toFixed(2)}`)
} else {
    alert (`O Aluno foi Reprovado. Nota da Media ${notasMedia.toFixed(2)}!`)
  }