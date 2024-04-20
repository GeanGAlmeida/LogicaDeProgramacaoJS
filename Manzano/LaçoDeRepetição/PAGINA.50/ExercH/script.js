/**Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial */

let comodo, continuar;
let largura, cumprimento, area, somaArea = 0;

    do {
        comodo = prompt("Qual o nome do comodo: ");
        largura = parseInt(prompt("Qual a largura desse comodo: "));
        cumprimento = parseInt(prompt("Qual o cumprimento desse comodo: "));
        area = cumprimento * largura;
        console.log("A area desse comodo é " + area);
        somaArea += area;
        continuar = prompt("Deseja verificar a área novamente? (s/n)").toUpperCase();
    } while (continuar === "S");

    console.log("A soma total de todas os comodos é " + somaArea);