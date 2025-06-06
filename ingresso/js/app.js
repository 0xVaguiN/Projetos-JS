function comprar(){
    let ticket = document.getElementById('tipo-ingresso');
    let amount = parseInt(document.getElementById('qtd').value);

    if(amount <= 0 || amount == '') {
        alert('Quantidade inválida!');
        return;
    } else if(ticket.value == 'pista'){
        buyPista(amount);
    } else if(ticket.value == 'inferior'){
        buyInferior(amount);
    } else {
        buySuperior(amount);
    }
}

function buyPista(amount){
    let amountPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(amount <= amountPista) {
    amountPista = amountPista - amount;
    document.getElementById('qtd-pista').textContent = amountPista;
    alert('Compra realizada com sucesso!');
    document.getElementById('qtd').value = '';
    } else {
      alert('Quantidade de ingressos insuficiente!');
      document.getElementById('qtd').value = '';
    }
}

function buyInferior(amount){
    let amountInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(amount <= amountInferior) {
    amountInferior = amountInferior - amount;
    document.getElementById('qtd-inferior').textContent = amountInferior;
    alert('Compra realizada com sucesso!');
    document.getElementById('qtd').value = '';
    } else {
      alert('Quantidade de ingressos insuficiente!');
      document.getElementById('qtd').value = '';
    }
}

function buySuperior(amount){
    let amountSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(amount <= amountSuperior) {
    amountSuperior = amountSuperior - amount;
    document.getElementById('qtd-superior').textContent = amountSuperior;
    alert('Compra realizada com sucesso!');
    document.getElementById('qtd').value = '';
    } else {
      alert('Quantidade de ingressos insuficiente!');
      document.getElementById('qtd').value = '';
    }
}

