/**Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'. */

let estoque = parseInt(prompt("Qual a quantidade do estoque atual"))
let quantidade_maxima = parseInt(prompt("Qual a quantidade maxima do estoque"))
let quantidade_minima = parseInt(prompt("Qual a quantidade minima do estoque"))

let quantidade_media = (quantidade_maxima + quantidade_minima) / 2

if(estoque >= quantidade_media){
    alert("Não é necessario efetuar compras de novos produtos")
}
else{
    alert("É necessario efetuar compras de novos produtos")
}