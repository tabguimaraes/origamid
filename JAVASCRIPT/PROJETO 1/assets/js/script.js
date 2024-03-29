function main() {
  console.log("online...");
  document.documentElement.style.scrollBehavior = "smooth";
  document.documentElement.className += " js";

  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  const animaisDescricao = document.querySelectorAll(".animais-descricao section");
  const animaisLista = document.querySelectorAll(".animais-lista li");
  const section = document.querySelectorAll(".js-sections");
  const valorWindow = window.innerHeight * 0.6;
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
      function activeAccordion(item) {
        item.classList.toggle(activeClass);
        item.nextElementSibling.classList.toggle(activeClass);
      }

      accordionList.forEach((item) => {
        item.addEventListener("click", () => {
          activeAccordion(item);
        });
      });
    }
  }
  initAccordionList();

  function initAnimaScroll() {
    if (section.length) {
      function AnimaScroll() {
        section.forEach((item) => {
          const sectionTop = item.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - valorWindow < 0;
          if (isSectionVisible) {
            item.classList.add(activeClass);
          }
        });
      }

      window.addEventListener("scroll", AnimaScroll);
    }
  }
  initAnimaScroll();
}

main();
