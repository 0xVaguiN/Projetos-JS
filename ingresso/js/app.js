function comprar(){
    let ticket = document.getElementById('tipo-ingresso').value;
    let amount = document.getElementById('qtd').value;
    if(amount <= 0 || amount === '') {
        alert('Quantidade inválida!');
        return;
    }

    let amountPista = document.getElementById('qtd-pista').value;

}