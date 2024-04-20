/**Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores. */

let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))
let num3 = parseInt(prompt("Digite o terceiro numero"))

let maior = 0
let segundo_maior = 0

if (num1 > num2 && num1 > num2) {
    maior = num1
    if (num2 > num3) {
        segundo_maior = num2
    }
    else{
        segundo_maior = num3
    }
}

else if (num2 > num1 && num2 > num3) {
    maior = num2
    if (num1 > num3) {
        segundo_maior = num1
    }
    else{
        segundo_maior = num3
    }
}
else{
    maior = num3
    if (num1 > num2) {
        segundo_maior = num1
    }
    else{
        segundo_maior = num2
    }
}

let soma = maior + segundo_maior
alert(soma)