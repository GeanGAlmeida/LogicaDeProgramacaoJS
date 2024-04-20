/**Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
estar em condições, um dos seguintes requisitos deve ser satisfeito:
- Ter no mínimo 65 anos de idade.
- Ter trabalhado no mínimo 30 anos.
- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'. */

let numero_cod = Number(prompt("Digite o codigo do usuario"))

let ano_nascimento = Number(prompt("Digite o ano de nascimento do funcionario"))
let ano_ingresso = Number(prompt("Digite o ano de ingresso do funcionario"))

const ano_atual = 2024

let idade = ano_atual - ano_nascimento
let tempo_trabalho = ano_atual - ano_ingresso

if (idade >= 65 || tempo_trabalho >= 30 || idade >= 60 && tempo_trabalho >= 30) {
    alert(`O funcionario ${numero_cod} tem ${idade} anos de idade e ${tempo_trabalho} de tempo de trabalho`)
    alert("Ele esta apto a se aposentar")
} else {
    alert(`O funcionario ${numero_cod} tem ${idade} anos de idade e ${tempo_trabalho} de tempo de trabalho`)
    alert("Ele não esta apto a se aposentar")
}