/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.*/

var quantidade_maca = parseInt(prompt("Digite a quantidade maçã desejadas"))

if(quantidade_maca < 12){
    var total_compra = quantidade_maca * 1.30
    alert("O total da compra é "+total_compra)
}
else{
    var total_compra = quantidade_maca * 1
    alert("O total da compra é "+total_compra)
}