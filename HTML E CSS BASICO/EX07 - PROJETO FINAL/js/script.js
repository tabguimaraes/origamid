//Ativar links do menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(linkAtivo) {
  const url = location.href;
  const href = linkAtivo.href;

  if (url.includes(href)) {
    linkAtivo.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(produtoAtivo) {
  const elemento = document.getElementById(produtoAtivo);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProdutos);
