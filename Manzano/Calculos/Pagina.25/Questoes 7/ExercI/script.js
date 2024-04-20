/**Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo */

let valor1 = parseInt(prompt("Digite qualquer valor"))
let valor2 = parseInt(prompt("Digite qualquer outro valor"))

let diferenca = valor1 - valor2

let quadrado = diferenca ** 2

alert(`A diferença do Valor1 e do Valor2 é ${diferenca} e o quadrado dessa diferença é ${quadrado}`)