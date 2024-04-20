/**Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente. */

let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))
let num3 = parseInt(prompt("Digite o terceiro numero"))

aux = 0

if (num1 > num2) {
    aux = num1
    num1 = num2
    num2 = aux
}

if (num2 > num3) {
    aux = num2
    num2 = num3
    num3 = aux
}

if (num1 > num2) {
    aux = num1
    num1 = num2
    num2 = aux
}
alert(`A ordem crescente dos numeros são ${num1}, ${num2}, ${num3}`)