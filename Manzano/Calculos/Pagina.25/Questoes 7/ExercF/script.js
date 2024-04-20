/**Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados */

let valorA = parseInt(prompt("Informe um valor para a variável A"))
let valorB = parseInt(prompt("Informe um valor para a variável B"))

alert("Valores antes da troca")
alert(`O valor da variavel A = ${valorA} e da variavel B = ${valorB}`)

let aux = valorA
valorA = valorB
valorB = aux

alert("Valores depois da troca")
alert(`O valor da variavel A = ${valorA} e da variavel B = ${valorB}`)