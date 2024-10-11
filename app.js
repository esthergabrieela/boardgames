let JogosAlugados = 0 
function contarEExibirJogosAlugados(id){
console.log(`Total de jogos alugados: ${JogosAlugados}`);
}
function alterarStatus(id) {
     let gameClicado = document.getElementById(`game-${id}`);
     let imagem = gameClicado.querySelector('.dashboard__item__img');
    // // procure um elemento na class . dashboard__item__img
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent ='Alugar';
        JogosAlugados--;
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        JogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded',function(){
    JogosAlugados = document.querySelector('dashboard__item__img--rented'), contarEExibirJogosAlugados();
});
