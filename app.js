//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número Secreto!!';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um número de 1 a 10';

//vou criar uma funçoa para chamar o titulo e o paragrafo

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo Do Número Secreto');
exibirTextoNaTela('p', 'Escolha um Número de 1 a 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random * 10 + 1);
}