/**Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída */

let valorA =parseInt(prompt("Digite um valor para a variavel A"))
let valorB =parseInt(prompt("Digite um valor para a variavel B"))
let valorC =parseInt(prompt("Digite um valor para a variavel C"))
let valorD =parseInt(prompt("Digite um valor para a variavel D"))

let soma = valorA + valorB
alert(`A soma das variaveis A e B é ${soma}`)
let mult = valorA * valorB
alert(`A multiplicação das Variaveis A e B é ${mult}`)

soma = valorA + valorC
alert(`A soma das variaveis A e C é ${soma}`)
mult = valorA * valorC
alert(`A multiplicação das Variaveis A e C é ${mult}`)

soma = valorA + valorD
alert(`A soma das variaveis A e D é ${soma}`)
mult = valorA * valorD
alert(`A multiplicação das Variaveis A e D é ${mult}`)

soma = valorB + valorC
alert(`A soma das variaveis B e C é ${soma}`)
mult = valorB * valorC
alert(`A multiplicação das Variaveis B e C é ${mult}`)

soma = valorB + valorD
alert(`A soma das variaveis B e D é ${soma}`)
mult = valorB * valorD
alert(`A multiplicação das Variaveis B e D é ${mult}`)

soma = valorC + valorD
alert(`A soma das variaveis C e D é ${soma}`)
mult = valorC * valorD
alert(`A multiplicação das Variaveis C e D é ${mult}`)