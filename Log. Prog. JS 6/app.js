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

let listadeNumerosSorteados = []
let numeroLimiteChute = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas =  1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responseVoice.speak(texto, "Brazilian Portuguese Female", {pitch: 1, rate: 1.2, volume: 1}) // opção de fala para os textos do jogo
}

function mensagemInicial() {
exibirTextoNaTela('h1', 'Jogo de advinhação')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value   
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentaviva = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentaviva}`
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled') //ativa o botão de novo jogo quando acerta o numero secreto
    } else {
        if (chute > numeroSecreto) {
            
        }
        exibirTextoNaTela('h1', 'Errou!')
        exibirTextoNaTela('p', 'Tente novamente!')
    }
    tentativas++ //igual a tentativas = tentativas + 1
    limparCampos();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteChute + 1)
    let elementosLista = listadeNumerosSorteados.length

    if (elementosLista == numeroLimiteChute) {
        listadeNumerosSorteados = []
    }

    if (listadeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio() //recursão
    } else {
        listadeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampos() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {    
    numeroSecreto = gerarNumeroAleatorio()
    limparCampos()
    tentativas = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', 'true') //o botão só fica habilitado quando acerta o numero
}

