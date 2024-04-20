/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor.*/

alert("Vamos ler o custo de fábrica de um veículo e exibir o valor para o consumidor");
 
var custoFabrica=parseFloat(prompt("Digite o custo de fábrica do veículo: "));
 
taxaTotal=(73 / 100); 
 
 var valorVeiculo=(custoFabrica * taxaTotal + custoFabrica);
 
alert("O custo do veículo para o consumidor será: " + valorVeiculo);