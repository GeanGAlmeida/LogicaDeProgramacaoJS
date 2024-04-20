/**Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO). */

let valor = parseFloat(prompt("Digite o valor da conta atrasada"))
let tempo_atrasado = parseInt(prompt("Digite quantos tem dias de atraso"))
let taxa = parseInt(prompt("Digite a porcentagem da taxa"))

let prestacao = valor + (valor * taxa/ 100) * tempo_atrasado

alert(`O novo valor da prestação é: ${prestacao}`)