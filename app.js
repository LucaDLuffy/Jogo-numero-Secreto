//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número Secreto!!';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um número de 1 a 10';

//vou criar uma funçoa para chamar o titulo e o paragrafo

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo Do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um Número de 1 a 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentiva = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você Descobriu o Número Secreto com ${tentativas} ${palavraTentiva}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

