/*         
---------- Aula 1 - Criando o jogo

let titulo = document.querySelector('h1')
titulo.innerHTML = 'Jogo de advinhação'

let paragraf = document.querySelector('p')
paragraf.innerHTML = 'Escolha um numero entre 1 e 10'

function verificarChute() { 
   console.log('O botão foi clicado!')
}
*/

//---------- Aula 2 - Melhorando codigo com funções
//---------- Aula 3 - Colocando um contador

let numeroSecreto = gerarNumeroAleatorio()
let tentativas =  1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo de advinhação')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('input').value   
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentaviva = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentaviva}`
        exibirTextoNaTela('p', mensagemTentativas)
    } else {
        if (chute > numeroSecreto) {
            
        }
        exibirTextoNaTela('h1', 'Errou!')
        exibirTextoNaTela('p', 'Tente novamente!')
    }
    tentativas++ //igual a tentativas = tentativas + 1
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}


