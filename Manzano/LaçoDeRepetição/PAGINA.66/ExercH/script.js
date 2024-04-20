/**Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguo */

let base = parseInt(prompt("Digite o valor da base na operação"))

let expoente = parseInt(prompt("Digite o valor do expoente"))

let resultado = 1;
for(let i = 1; i <= expoente; i++){
    resultado *= base
}

console.log(`${base} ^ ${expoente} = ${resultado}`)