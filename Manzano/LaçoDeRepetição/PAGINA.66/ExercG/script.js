/**Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguo */

let resultado = 1;
const base= 3;

console.log(`${base} ^ 0 = ${resultado}`);

for (let i = 1;  i<= 15; i++) {
    resultado *= base;
    console.log(`${base} ^ ${i} = ${resultado}`);
}