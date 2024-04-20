/**Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados. */

let lado1 = parseInt(prompt("Digite o primeiro lado do triangulo"))
let lado2 = parseInt(prompt("Digite o segundo lado do triangulo"))
let lado3 = parseInt(prompt("Digite o terceiro lado do triangulo"))

let verdade1
let verdade2
let verdade3

if(lado1 < lado2 + lado3){
    verdade1 = true
}else{
    verdade1 = false
}
if (lado2 < lado1 + lado3) {
    verdade2 = true
} else {
    verdade2 = false
}
if (lado3 < lado1 + lado2) {
    verdade3 = true
} else {
    verdade3 = false
}

if(verdade1 == true && verdade2 == true && verdade3 == true){
    alert("Os valores formam um triângulo")
}
else{
    alert("Os valores não formam um triângulo")
}