function main() {
  console.log("online...");

  const activeClass = "ativo";
  const animaisDescricao = document.querySelectorAll(".animais-descricao section");
  const animaisLista = document.querySelectorAll(".animais-lista li");
  const accordionList = document.querySelectorAll(".js-accordion dt");

  function initSessaoAnimais() {
    if (animaisDescricao.length && animaisLista.length) {
      function sessaoAnimais(index) {
        animaisDescricao.forEach((item) => {
          item.classList.remove(activeClass);
        });

        animaisDescricao[index].classList.add(activeClass);
      }

      animaisLista.forEach((item, index) => {
        item.addEventListener("click", () => {
          sessaoAnimais(index);
        });
      });
    }
  }
  initSessaoAnimais();

  function initAccordionList() {
    if (accordionList.length) {
      function activeAccordion() {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
      }

      accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
      });
    }
  }
  initAccordionList();
}
main();
