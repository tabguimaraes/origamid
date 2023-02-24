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

//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPerguntas(evento) {
  const perguntaAtual = evento.currentTarget;

  const controls = perguntaAtual.getAttribute("aria-controls");

  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");

  perguntaAtual.setAttribute("aria-expanded", ativa);

  console.log(ativa);

  // console.log(resposta);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPerguntas);
}

perguntas.forEach(eventoPerguntas);
