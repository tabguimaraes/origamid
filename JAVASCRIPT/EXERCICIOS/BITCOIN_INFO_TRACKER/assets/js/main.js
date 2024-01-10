function init() {
  const valorBitcoin = document.querySelector("#valorBitcoin");
  const buscaValor = `https://blockchain.info/ticker`;
  const updatePrice = document.querySelector("#update");
  const msg = document.querySelector("#msg");

  updatePrice.addEventListener("click", () => {
    fetch(buscaValor).then((response) => {
      response.json().then((response) => {
        const precoCompra = response.BRL.buy;
        valorBitcoin.innerText = `Um bitcoin custa ${precoCompra.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
      });
    });
  });

  let counter = 0;

  while (counter < 10) {
    setInterval(() => {
      msg.innerText = `Preço será atualizado em ${counter}`;
      counter++;
      console.log(counter);
    }, 30000);
  }
}

init();
