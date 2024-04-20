/** Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3*/

let valor1 = parseInt(prompt("Digite o primeiro numero"))
let valor2 = parseInt(prompt("Digite o segundo numero"))
let valor3 = parseInt(prompt("Digite o terceiro numero"))
let valor4 = parseInt(prompt("Digite o quarto numero"))

if (valor1 % 2 == 0 && valor1 % 3 == 0) {
    alert(`${valor1} é divisivel por 2 e 3`)
} else {
    alert(`${valor1} não é divisivel por 2 e 3`)
}
if (valor2 % 2 == 0 && valor2 % 3 == 0) {
    alert(`${valor2} é divisivel por 2 e 3`)
} else {
    alert(`${valor2} não é divisivel por 2 e 3`)
}
if (valor3 % 2 == 0 && valor3 % 3 == 0) {
    alert(`${valor3} é divisivel por 2 e 3`)
} else {
    alert(`${valor3} não é divisivel por 2 e 3`)
}
if (valor4 % 2 == 0 && valor4 % 3 == 0) {
    alert(`${valor4} é divisivel por 2 e 3`)
} else {
    alert(`${valor4} não é divisivel por 2 e 3`)
}