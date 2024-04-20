let x = parseInt(prompt("Digite um numero"))
let y = parseInt(prompt("Digite outro numero"))

let z = (x * y) + 5
let resposta = ""

if (z <= 0) {
    resposta = "A"
} else if(z <= 100){
    resposta = "B"
}
else{
    resposta = "C"
}
alert(`${z}, ${resposta}`)