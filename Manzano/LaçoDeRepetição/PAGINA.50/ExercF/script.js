/**Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
média. */

let num;
let soma = 0;
let i = 0;
let mediaAritimetica;

do {
    num = parseInt(prompt("Digite uma numero qualquer (caso que interrompa o programa, digite um numero negativo)"))
    if (num >= 0) {
        soma += num
        i++
    }
} while (num >= 0);

if (i > 0) {
    mediaAritimetica = soma / i
    console.log(`A soma de todos os numero digitados é ${soma}`);
    console.log(`A media aritmética de todos os numeros digitado é ${mediaAritimetica}`);
    console.log(`Foram lidos no total ${i} numeros`);
} else {
    console.log("Error");
    
}