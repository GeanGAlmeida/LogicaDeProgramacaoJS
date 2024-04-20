/**Ler dois valores e imprimir uma das três mensagens a seguir:

‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro */

let num1 = parseInt(prompt("Digite o primeiro numero"))
let num2 = parseInt(prompt("Digite o segundo numero"))

if (num1 == num2) {
    alert("O numeros são iguais")
} else if(num1 > num2){
    alert(`o numero ${num1} é maior que numero ${num2}`)
}
else{
    alert(`o numero ${num2} é maior que numero ${num1}`)
}