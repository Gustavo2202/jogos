

let totalGeral = 0;
listaCarrinho = document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';


function adicionar() {
    // recuperar valores nome do produto, quantidade e valor:
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; // split ele vai separar o valor igual na linha 8 e 9 
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');


    /*alert(nomeProduto);
    alert(valorUnitario)
    alert(qtdProduto.value); // foi colocado o  .value para pegar o valor escolhido
    */


    // calcular o preço, o nosso subtotal:
    let subTotal = quantidade.value * valorUnitario;
    // alert (preco);

    // adicionar no carrinho:
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML +
        `
        <section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
    </section>
  </section>
  `;

    // atualizar o valor total:
    totalGeral = totalGeral + subTotal

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    quantidade = document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    listaCarrinho = document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';


}
