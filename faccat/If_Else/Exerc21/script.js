/*Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os 
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é 
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte */

var hora_inicio = parseInt(prompt("Qual foi o horario de inicio da partida"))
var hora_fim = parseInt(prompt("Qual foi a hora do fim da partida"))

if(hora_fim > hora_inicio){
    var partida_total = hora_fim - hora_inicio
    alert("O horario do total da partida foi de "+partida_total)
}
else{
    var partida_total = hora_fim - hora_inicio + 24
    alert("O horario do total da partida foi de "+partida_total)
}