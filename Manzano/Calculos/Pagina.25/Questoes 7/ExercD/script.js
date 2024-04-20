/**Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a
distância percorrida com a fórmula DISTANCIA = TEMPO * VELOCIDADE. Possuindo o valor da
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula
LITROS_USADOS = DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a
quantidade de litros (LITROS_USADOS) utilizada na viagem */

let tempo_gasto = parseInt(prompt("Digite quanto tempo levou a viagem"))
let velocidade_media = parseFloat(prompt("Fale a velocidade media em KM"))

let distancia = tempo_gasto * velocidade_media

let litros_usados = distancia / 12

alert(`A velocidade media da viagem foi de ${velocidade_media}KM/h, e levou ${tempo_gasto}Hr`)
alert(`A Distacia percorrida foi de ${distancia}KM e gastou ${litros_usados} litros na viagem`)