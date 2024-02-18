alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9
console.log(numeroSecreto)
let chute
let tentativas = 1


// enquanto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`)
    } else {
        if(numeroSecreto > chute) {
        alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
    
        }
    } tentativas++ // incrementando 1, equivalente a tentativas = tentativas + 1
}

/* Operadores logicos 
AND = &&
OR = ||
Igual ==
Diferente !=
Menor < 
Menor igual <=
Maior >
Maior igual >=
Negação !
*/