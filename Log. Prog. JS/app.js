alert("Bem-vindo ao jogo do número secreto!"); // exibindo um alerta //
let chute = prompt("Escolha um número de 01 a 10") // recebendo um dado do usuario //

let numerosct = 7 // declarando uma variavel //

if (chute == numerosct) { // um = simples é um "recebe", == dupla, é uma comparação //
    alert(`Parabéns, você acertou! O número secreto é: ${numerosct}`) //Pra concatenar frase e variavel tem que usar crase
} else {
    alert("Você errou :(")
}

