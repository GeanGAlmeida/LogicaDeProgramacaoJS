/**Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo */

let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));

let quociente = 0;
let resto = dividendo;

do{
    resto -= divisor;
    quociente++;
}while(resto >= divisor) 

console.log(`Resultado inteiro da divisão: ${quociente}`);  