function main() {
  console.log("online...");
  document.documentElement.style.scrollBehavior = "smooth";
  document.documentElement.className += " js";

  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  const animaisDescricao = document.querySelectorAll(".animais-descricao section");
  const animaisLista = document.querySelectorAll(".animais-lista li");
  const sections = document.querySelectorAll(".js-sections");
  // const menuLi = document.querySelectorAll(".menu li a");

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

  function initAnimaScroll() {
    if (sections.length) {
      function animaScroll() {
        sections.forEach((item) => {
          const valorWindow = window.innerHeight * 0.6;
          const sectionTop = item.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - valorWindow;
          item.addEventListener("scroll", () => {
            console.log(isSectionVisible < 0);

            if (isSectionVisible < 0) {
              item.classList.add(activeClass);
            } else {
              item.classList.remove(activeClass);
            }
          });
        });
      }
      //VERIFICAR NECESSIDADE DE ATIVAR FUNÇÃO animaScroll()
      animaScroll();
    }
  }
  initAnimaScroll();
}
main();
