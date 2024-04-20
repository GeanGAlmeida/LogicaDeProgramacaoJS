/**Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

                                N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
Média_de_Aproveitamento = ---------------------------------------------------------
                                                        7 */


let avaliacao1 = parseFloat(prompt("Qual a nota maxima da primeira avaliação"))
let nota1 = parseFloat(prompt("Digite quanto o aluno tirou nessa avaliação"))

let avaliacao2 = parseFloat(prompt("Qual a nota maxima da segunda avaliação"))
let nota2 = parseFloat(prompt("Digite quanto o aluno tirou nessa avaliação"))

let avaliacao3 = parseFloat(prompt("Qual a nota maxima da terceira avaliação"))
let nota3 = parseFloat(prompt("Digite quanto o aluno tirou nessa avaliação"))

let media_exercicio = (avaliacao1 + avaliacao2 +avaliacao3) / 3

let media_de_aproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + media_exercicio) / 7

if (media_de_aproveitamento >= 9.0) {
    alert(`O aluno tirou A com uma media de ${media_de_aproveitamento}`)
} 
else if(media_de_aproveitamento >= 7.5 && media_de_aproveitamento < 9.0){
    alert(`O aluno tirou B com uma media de ${media_de_aproveitamento}`)
}
else if(media_de_aproveitamento >= 6.0 && media_de_aproveitamento < 7.5){
    alert(`O aluno tirou C com uma media de ${media_de_aproveitamento}`)
}
else{
    alert(`O aluno tirou D com uma media de ${media_de_aproveitamento}`)
}