/**Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE */

let time1 = prompt("Qual o nome do primeiro time")
let gols_time_um =parseInt(prompt("Quantos gols o primeiro time fez"))
let time2 = prompt("Qual o nome do segundo time")
let gols_time_dois =parseInt(prompt("Quantos gols o segundo time fez"))

if (gols_time_um == gols_time_dois) {
    alert(`O placar foi de ${gols_time_um} X ${gols_time_dois}, deu empate`)
}
 else if(gols_time_um > gols_time_dois){
    alert(`O ${time1} ganho de ${gols_time_um} X ${gols_time_dois}`)
}
else{
    alert(`O ${time2} ganho de ${gols_time_dois} X ${gols_time_um}`)
}
