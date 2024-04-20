let valorA = parseInt(prompt("Digite o primeiro numero"))
let valorB = parseInt(prompt("Digite o segundo numero"))
let valorC = parseInt(prompt("Digite o terceiro numero"))

let mens = ""

if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB) {
    if (valorA == valorB && valorB == valorC) {
        mens = "Triângulo Equilátero"
    } else if(valorA == valorB || valorB == valorC || valorA == valorC){
        mens = "Triângulo Isósceles"
    }else{
        mens = "Triângulo Escaleno"
    }
} else {
    mens = "Não e possível formar um triângulo"
}
alert(mens)