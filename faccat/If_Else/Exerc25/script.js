/**Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. */

let cod_cliente =  parseInt(prompt("Digite o codigo do cliente"))
let saldo = parseFloat(prompt("Qual é o saldo da conta"))
let debito = parseFloat(prompt("Quanto é o débito da conta"))
let credito = parseFloat(prompt("Quanto é o  crédido da conta"))

let saldo_atual = saldo - debito + credito

if(saldo_atual >= 0){
    alert(`O seu saldo esta positivo com R$${saldo_atual}`)
}
else{
    alert(`O seu saldo esta negativo com R$${saldo_atual}`)
}