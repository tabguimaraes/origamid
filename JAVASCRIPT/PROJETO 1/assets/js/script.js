console.log("Conexão ok!");

const html = document.querySelector("html");

const animaisLista = html.querySelectorAll(".animais-lista li");

const animaisDescricao = html.querySelectorAll(".animais-descricao section");

animaisLista.forEach((item, index) => {
  item.addEventListener("click", () => {
    // animaisLista.forEach((item) => {
    //   item.classList.remove("ativo");
    // });
    if (item) {
      item.classList.remove("ativo");
    }
    classeAtivo(index);
  });
  console.log(item, index);
});

animaisDescricao.forEach((item, index) => {
  item.classList.remove("ativo");
  item.addEventListener("click", () => {
    console.log(item, index);
    // classeAtivo(index);
  });
});

function classeAtivo(index) {
  animaisDescricao[index].classList.add("ativo");
  animaisLista[index].classList.add("ativo");
}
