/**Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do
percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS) */

let salarioMensal = parseFloat(prompt("Digite o salario mensal do funcionario"))
let porcentagemReajuste = parseFloat(prompt("Digite a porcentagem de reajuste do salario"))

let novoSalario = salarioMensal + (porcentagemReajuste / 100 * salarioMensal)

alert(`O novo salario com o reajuste do funcionario R$${novoSalario}`)