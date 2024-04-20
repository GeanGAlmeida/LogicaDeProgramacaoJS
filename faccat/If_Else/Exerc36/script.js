/**Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha. */

let idade_homem1 = parseInt(prompt("Fale a idade do primeiro homem"))
let idade_homem2 = parseInt(prompt("Fale a idade do segundo homem"))

let idade_mulher1 = parseInt(prompt("Fale a idade da primeira mulher"))
let idade_mulher2 = parseInt(prompt("Fale a idade da segunda mulher"))

let maior_homem
let menor_homem
let maior_mulher
let menor_mulher

if(idade_homem1 > idade_homem2){
    maior_homem = idade_homem1
    menor_homem = idade_homem2
}else{
    maior_homem = idade_homem2
    menor_homem = idade_homem1
}

if (idade_mulher1 > idade_mulher2) {
    maior_mulher = idade_mulher1
    menor_mulher = idade_mulher2
} else {
    maior_mulher = idade_mulher2
    menor_mulher = idade_mulher1
}

let soma = maior_homem + menor_mulher
let produto = menor_homem * maior_mulher

alert(`A soma do homem mais velho com a mulher mais nova é ${soma}`)
alert(`O produto da mulher  mais velha com homem mais novo é ${produto}`)