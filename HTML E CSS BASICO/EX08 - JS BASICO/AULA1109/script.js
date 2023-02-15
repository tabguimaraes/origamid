console.log("teste ok");

const listaImagem = document.querySelectorAll("#galeria li img");

listaImagem.forEach(galeriaClick);

function galeriaClick(imagem) {
  imagem.addEventListener("click", trocarImagem);
}

function trocarImagem(event) {
  const imagemClicada = event.currentTarget;
  const imgPrincipal = document.querySelector("#imgPrincipal");
  imgPrincipal.src = imagemClicada.src;
  imgPrincipal.alt = imagemClicada.alt;
  // console.log(imagemClicada);
}
