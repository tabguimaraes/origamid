function main() {
  console.log("Conexão ok!");

  const html = document.querySelector("html");

  const animaisDescricao = html.querySelectorAll(".animais-descricao section");

  const animaisLista = html.querySelectorAll(".animais-lista li");

  if (animaisDescricao.length && animaisLista.length) {
    function sessaoAnimais(index) {
      animaisDescricao.forEach((item) => {
        item.classList.remove("ativo");
      });

      animaisDescricao[index].classList.add("ativo");
    }

    animaisLista.forEach((item, index) => {
      item.addEventListener("click", () => {
        sessaoAnimais(index);
      });
    });
  }
}
main();
