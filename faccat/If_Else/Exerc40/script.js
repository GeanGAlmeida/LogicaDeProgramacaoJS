/**Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto */

let nome_produto = prompt("Escreva o nome de um produto qualquer")
let quantidade_adquirida = parseInt(prompt(`Digite a quantidade que deseja levar ${nome_produto} que deseja levar`))
let preco_unitario = parseFloat(prompt(`Qual o preço do ${nome_produto}?`))

let total = quantidade_adquirida * preco_unitario
alert(`O total a pagar sem nenhum desconto é ${total}`)

if (quantidade_adquirida <= 5) {
    total -= 2 / 100 * total
} else if(quantidade_adquirida > 5 && quantidade_adquirida <= 10){
    total -= 3 / 100 * total
}
else{
    total -= 5 / 100 * total
}
alert(`O total a pagar com já com o desconto incluso é ${total}`)