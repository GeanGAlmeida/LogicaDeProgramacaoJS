/**Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário. */

let valor;
    let maiorValor = 0;
    let menorValor = 1000000000000;
    
    do {
        valor = parseInt(prompt("Digite um valor positivo (ou um valor negativo para encerrar):"));
    
        if (valor >= 0) {
            if (valor > maiorValor) {
                maiorValor = valor;
            }
    
            if (valor < menorValor) {
                menorValor = valor;
            }
        }
    
    } while (valor >= 0);
    
    alert(`Maior valor informado: ${maiorValor}`);
    alert(`Menor valor informado: ${menorValor}`); 