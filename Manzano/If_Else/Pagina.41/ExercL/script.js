/**Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com
saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a
mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da
mensagem de saudação o nome previamente informado. */

let nome = prompt("Escreva seu nome")

let sexo = prompt("Qual o seu sexo (M-Masculino ou F-Feminino): ")

if (sexo == "M"){
    alert(`Ola Sr. ${nome}, é muito bom tê-lo de volta`)
}
else if (sexo == "F"){
    alert(`Ola Sra. ${nome}, é muito bom tê-lo de volta`)
}