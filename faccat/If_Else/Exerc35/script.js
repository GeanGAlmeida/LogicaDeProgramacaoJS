/**Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. */

let combustivel = ""

combustivel = prompt("Qual tipo de combustivel escolhido (G-Gasolina, A-Alcool)")

let litros_combustiveis = parseInt(prompt("Digite quantos litros deseja colocar"))

if (combustivel == "G") {
    if (litros_combustiveis <= 20) {
        let desconto = 3.30 - (3 / 100 * 3.30)
        let litros_totais = litros_combustiveis * desconto
        alert(`O cliente colocou ${litros_combustiveis} e pagou no total R$${litros_totais}`)
    }else{
        let desconto = 3.30 - (5 / 100 * 3.30)
        let litros_totais = litros_combustiveis * desconto
        alert(`O cliente colocou ${litros_combustiveis} e pagou no total R$${litros_totais}`)
    }
    
} 
else if(combustivel == "A"){
    if (litros_combustiveis <= 20) {
        let desconto = 2.90 - (4 / 100 * 2.90)
        let litros_totais = litros_combustiveis * desconto
        alert(`O cliente colocou ${litros_combustiveis} e pagou no total R$${litros_totais}`)
    }else{
        let desconto = 2.90 - (6 / 100 * 2.90)
        let litros_totais = litros_combustiveis * desconto
        alert(`O cliente colocou ${litros_combustiveis} e pagou no total R$${litros_totais}`)
    }
}