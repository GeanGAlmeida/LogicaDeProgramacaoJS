/**Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total */

let salario_fixo = parseFloat(prompt("Qual o salario fixo do funcionario"))
let valor_vendas = parseFloat(prompt("Qual foi o valor de todas as vendas do funcionario"))


if(valor_vendas <= 1.500){
    let reajuste = salario_fixo + (3 / 100 * valor_vendas)
    alert(`O salario total do funcionario é ${reajuste}`)
}else{
    let reajuste = salario_fixo + (5 / 100 * valor_vendas)
    alert(`O salario total do funcionario é ${reajuste}`)
}