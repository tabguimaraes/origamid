const links = document.querySelectorAll(".header-menu a");

function ativarLink(linkAtivo) {
  const url = location.href;
  const href = linkAtivo.href;

  if (url.includes(href)) {
    linkAtivo.classList.add("ativo");
  }
}

links.forEach(ativarLink);
