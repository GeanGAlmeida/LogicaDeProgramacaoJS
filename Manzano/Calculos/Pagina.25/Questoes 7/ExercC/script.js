/**Calcular e apresentar o valor do volume de uma lata de óleo */

let raio = parseFloat(prompt("Digite o Raio da lata"))
let altura = parseFloat(prompt("Digite o Altura da lata"))

volume = Math.PI * raio ** 2 *altura

alert(`O raio da lata é ${volume}`)