/**Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F = (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius */

let celsius = parseInt(prompt("Digite um valor em Celsius para ser convertido Fahrenheit"))

fahrenheit = (9 * celsius + 160) / 5

alert(`${celsius}° Graus Celsius convertido pra Fahrenheit é ${fahrenheit}F`)