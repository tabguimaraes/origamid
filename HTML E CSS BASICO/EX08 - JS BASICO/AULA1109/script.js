console.log("teste ok");

const listaImagem = document.querySelectorAll("#galeria li img");

listaImagem.forEach(galeriaClick);

function galeriaClick(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

function trocarImagem(event) {
  console.log(event);
}
