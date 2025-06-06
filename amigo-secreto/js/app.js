let friendNames = [];

function adicionar(){
    let friendName = document.getElementById('nome-amigo');
    let nameList = document.getElementById('lista-amigos');
    friendNames.push(friendName.value);

    if(nameList.textContent == '') {
        nameList.textContent = friendName.value;
    } else {
        nameList.textContent = nameList.textContent + ', ' + friendName.value;
    }

    friendName.value = '';
}

function sortear(){
    shuffle(friendNames);
    let prizeDrawList = document.getElementById('lista-sorteio');

    for (let i = 0; i < friendNames.length; i++) {

    if(i == friendNames.length - 1) {
        prizeDrawList.innerHTML = prizeDrawList.innerHTML + friendNames[i] + ' --> ' + friendNames[0] + '<br>';
    } else {
        prizeDrawList.innerHTML = prizeDrawList.innerHTML + friendNames[i] + ' --> ' + friendNames[i + 1] + '<br>';
    }

    }
}

function shuffle(nameList) {
    for (let indice = nameList.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [nameList[indice - 1], nameList[indiceAleatorio]] = [nameList[indiceAleatorio], nameList[indice - 1]];
    }
}

function reiniciar() {
    let friendName = document.getElementById('nome-amigo');
    let nameList = document.getElementById('lista-amigos');
    let prizeDrawList = document.getElementById('lista-sorteio');

    friendNames = [];
    friendName.value = '';
    nameList.textContent = '';
    prizeDrawList.innerHTML = '';
}

