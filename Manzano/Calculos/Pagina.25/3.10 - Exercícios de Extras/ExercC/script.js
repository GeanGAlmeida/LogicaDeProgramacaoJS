/**Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a
apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para
cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de
votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e
votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos
válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de
eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de
eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de
eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de
eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último
o percentual correspondente de votos em branco em relação à quantidade de eleitores. */

let candidatoA = parseInt(prompt("Quantos votos teve o candidato A"))
let candidatoB = parseInt(prompt("Quantos votos teve o candidato B"))
let candidatoC = parseInt(prompt("Quantos votos teve o candidato C"))

let votosNulos = parseInt(prompt("Quantos foram os votos nulos"))
let votosBrancos = parseInt(prompt("Quantos foram os votos brancos"))

let votosTotais = candidatoA + candidatoB + candidatoC + votosBrancos + votosNulos

let votosValidos = ((candidatoA + candidatoB + candidatoC) / votosTotais) * 100

let percentualCandidatoA = candidatoA / votosTotais * 100
let percentualCandidatoB = candidatoB / votosTotais * 100
let percentualCandidatoC = candidatoC / votosTotais * 100

let percentualVotosBrancos = votosBrancos / votosTotais * 100
let percentualVotosNulos = votosNulos / votosTotais * 100

alert(`Foram no total ${votosTotais} votos`)
alert(`O percentual de votos valídos é ${votosValidos}%`)
alert(`O percentual de votos Do Candidato A é ${percentualCandidatoA}%`)
alert(`O percentual de votos Do Candidato B é ${percentualCandidatoB}%`)
alert(`O percentual de votos Do Candidato C é ${percentualCandidatoC}%`)

alert(`O percentual de votos brancos é ${percentualVotosBrancos}%`)
alert(`O percentual de votos nulos é ${percentualVotosNulos}%`)