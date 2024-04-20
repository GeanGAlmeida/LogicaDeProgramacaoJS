/**Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */

let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))
let num3 = parseInt(prompt("Digite o terceiro numero"))

if (num1 > num2 && num1 > num3) {
    let maior = num1
    alert(maior)
}
else if(num2 > num1 && num2 > num3){
    let maior = num2
    alert(maior)
}
else{
    let maior = num3
    alert(maior)
}