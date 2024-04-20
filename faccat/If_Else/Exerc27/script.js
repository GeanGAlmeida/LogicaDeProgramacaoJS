/**Ler um valor e escrever se é positivo, negativo ou zero. */

let num = parseInt(prompt("Digite um valor"))

if(num > 0){
    alert(`O numero ${num} é positivo`)
}
else if(num == 0){
    alert("Esse numero é igual a zero")
}
else{
    alert(`O numero ${num} é negativo`)
}