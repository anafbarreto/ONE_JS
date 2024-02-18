alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1); // para gerar um numero aleatorio, inteiro, entre 1 e 10
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break; // para encerrar o while
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}
 
// operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' // >1? se sim xxx : se não xxx
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
