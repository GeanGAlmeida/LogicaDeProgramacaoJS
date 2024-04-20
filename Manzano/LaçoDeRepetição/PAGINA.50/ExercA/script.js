/** Apresentar os quadrados dos números inteiros de 15 a 200.*/

let i = 15
let mult = 0

do{
    mult =  i * i
    console.log(`${i} * ${i} = ${mult}`)
    i++
}while(i <= 200)