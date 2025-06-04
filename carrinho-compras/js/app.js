let total = 0;


function adicionar() {
    let product = document.getElementById('produto').value;
    let productName = product.split('-')[0];
    let productPrice = product.split('R$')[1];
    let productAmount = document.getElementById('quantidade').value;
    if(productAmount <= 0 || productAmount === '') {
        alert('Quantidade inválida!');
        return;
    }
    let price = productPrice * productAmount;

    let cart = document.getElementById('lista-produtos');
    cart.innerHTML = cart.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${productAmount}x </span>${productName}<span class="texto-azul">R$${price}</span>
        </section>`;

    total = total + price;
    let totalElement = document.getElementById('valor-total');
    totalElement.textContent = `R$${total}`;
    document.getElementById('quantidade').value = 1;

}

function limpar() {
    cart = document.getElementById('lista-produtos');
    cart.innerHTML = '';
    total = 0;
    let totalElement = document.getElementById('valor-total');
    totalElement.textContent = `R$${total}`;
}