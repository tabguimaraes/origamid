const valorBitcoin = document.querySelector("#valorBitcoin");

setInterval(() => {
  const buscaValor = `https://blockchain.info/ticker`;
  fetch(buscaValor).then((response) => {
    response
      .json()
      .then((response) => {
        return response.BRL;
      })
      .then((response) => {
        const precoCompra = response.buy;
        console.log(precoCompra);
        valorBitcoin.innerText = `O preço de compra atual é de ${precoCompra.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
      });
  });
}, 30000);
