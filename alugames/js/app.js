function alterarStatus(id){
    let status = document.getElementById(`game-${id}`);
    let imagem = status.querySelector('.dashboard__item__img');
    let botao = status.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        let confirma = prompt('Deseja confirmar a devolução(s/n)? ');
        if(confirma.toLowerCase() == 's'){
            botao.classList.remove('dashboard__item__button--return');
            return botao.textContent = 'Alugar';
        } else if(confirma.toLowerCase() == 'n'){
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            return botao.textContent = 'Devolver';
        } else {
            alert('Opção inválida!');
            return imagem.classList.add('dashboard__item__img--rented');
            return botao.classList.add('dashboard__item__button--return');
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }

    if(botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return');
    } else {
        botao.classList.add('dashboard__item__button--return');
    }
}
