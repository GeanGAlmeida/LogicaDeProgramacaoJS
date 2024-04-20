/**Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero */

let valorA = parseInt(prompt("Digite o primeiro valor"))
let valorB = parseInt(prompt("Digite o segundo valor"))
let valorC = parseInt(prompt("Digite o terceiro valor"))

let delta = 0
let x1 = 0
let x2 = 0

if(valorA == 0){
    alert("Impossivel fazer a equação de segundo grau")
}
else{
    delta = valorB ** 2 - 4 * valorA *valorC
    alert(`O delta vale ${delta}`)
    if (delta < 0) {
        alert("não existe raizes reais")
    } else {
        x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA)
        x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA)
       alert(`As raízes da equação são: ${x1} e ${x2}`);
    }
}