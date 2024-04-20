/**Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas*/

let fahrenheit = 0.0;

for(let celsius = 10; celsius <= 100; celsius += 10){
    
    fahrenheit = (9 * celsius + 160) / 5
    console.log(`Graus celsius: ${celsius} ºC | Graus em fahrenheit: ${fahrenheit}ºF`)
}