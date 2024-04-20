/**Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de
conversão é C = (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius */

let fahrenheit = parseInt(prompt("Digite um valor Fahrenheit para converter para Celsius"))

let celsius = (fahrenheit - 32) * (5/9)

alert(`${fahrenheit}F convertido para Celsius é ${celsius}°C`)