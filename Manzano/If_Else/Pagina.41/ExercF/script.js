/**Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente */

let valor1 = parseInt(prompt("Digite o primeiro numero"))
let valor2 = parseInt(prompt("Digite o segundo numero"))
let valor3 = parseInt(prompt("Digite o terceiro numero"))

if(valor1 < valor2 && valor2 < valor3){
    alert(`A ordem crescente dos numero é ${valor1}, ${valor2}, ${valor3}`)
}
else if(valor1 < valor3 && valor3 < valor2){
    alert(`A ordem crescente dos numero é ${valor1}, ${valor3}, ${valor2}`)
}
else if(valor2 < valor1 && valor1 < valor3){
    alert(`A ordem crescente dos numero é ${valor2}, ${valor1}, ${valor3}`)
}
else if(valor2 < valor3 && valor3 < valor1){
    alert(`A ordem crescente dos numero é ${valor2}, ${valor3}, ${valor1}`)
}
else if(valor3 < valor2 && valor2 < valor1){
    alert(`A ordem crescente dos numero é ${valor3}, ${valor2}, ${valor1}`)
}
else if(valor3 < valor1 && valor1 < valor2){
    alert(`A ordem crescente dos numero é ${valor3}, ${valor1}, ${valor2}`)
}