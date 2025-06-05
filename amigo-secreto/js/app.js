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
    alert(friendNames);
    /*
    let nameList = document.getElementById('lista-amigos');
    sweepstakeList = document.getElementById('lista-sorteio');
    sweepstakeList.textContent = nameList.textContent;   
    */
}
