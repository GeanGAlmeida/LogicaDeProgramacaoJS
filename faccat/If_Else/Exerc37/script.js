/**Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */

let quilo_morango = parseFloat(prompt("Digite a quantidade de morango em KG"))
let quilo_maca = parseFloat(prompt("Digite a quantidade de maças em KG"))
let preco_morango
let preco_maca

if (quilo_morango <= 5) {
    preco_morango = quilo_morango * 2.50
} else {
    preco_morango = quilo_morango * 2.20
}
if (quilo_maca <= 5) {
    preco_maca = quilo_maca * 1.80
} else {
    preco_maca = quilo_maca * 1.50
}

let quilos_totais = quilo_maca + quilo_morango
let total_compra = preco_maca + preco_morango
alert(`O preço final é de R$${total_compra}`)



if (quilos_totais > 8 || total_compra > 25) {
   let preco_final = total_compra - (10 / 100 * total_compra)
    alert(`O preço final com desconto foi de R$${preco_final}`)
}
