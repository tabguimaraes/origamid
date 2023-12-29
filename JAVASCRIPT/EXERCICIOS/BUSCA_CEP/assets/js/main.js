console.log("ok");

const cep = document.querySelector("#cep");
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");

function buscarCEP() {
  btn.addEventListener("click", () => {
    const cepDigitado = `https://viacep.com.br/ws/${cep.value}/json`;
    fetch(cepDigitado).then(function (response) {
      response
        .json()
        .then((response) => {
          return response;
        })
        .then((response) => {
          console.log(response);
          resultado.innerText += `${response.logradouro} - ${response.bairro} - ${response.localidade}/${response.uf}`;
        });
    });
  });
}

buscarCEP();
