function buscarCEP() {
  const cep = document.querySelector("#cep");
  const btn = document.querySelector("#btn");
  const resultado = document.querySelector("#resultado");

  btn.addEventListener("click", () => {
    const cepDigitado = `https://viacep.com.br/ws/${cep.value}/json`;
    fetch(cepDigitado).then((response) => {
      response.json().then((response) => {
        console.log(response);
        resultado.innerText += `${response.logradouro} - ${response.bairro} - ${response.localidade}/${response.uf}`;
      });
    });
  });
}

buscarCEP();
