// FUNÇÕES

// function dadosLivro(nome, ano, autor) {
//   return {
//     nome: nome,
//     totalAnos: 2050 - ano,
//     autor: autor,
//     frase: nome.toUpperCase() + " por " + autor.toUpperCase(),
//   };
// }
// const retornoLivro = dadosLivro("o senhor dos anéis", 1954, "j. r. r. tolkien");
// console.log(retornoLivro);
// console.log(retornoLivro.frase);
//

// const curso = {
//   nome: "Javascript",
//   completar() {
//     console.log("Curso completo de " + curso.nome);
//   },
// };

// curso.completar()

// const coordenadas = window.innerWidth;

// window.addEventListener("mousemove", posicao);

// function posicao(event) {
//   const pos = {
//     x: event.x,
//     y: event.y,
//   };
//   console.log(pos);
// }

// function posicao() {
//   window.addEventListener("mousemove", seguirMouse);
//   const circulo = document.querySelector(".circulo");

//   function seguirMouse(event) {
//     circulo.style.top = event.y + "px";
//     circulo.style.left = event.x + "px";
//     // console.log(event.x);
//   }
// }
// posicao();

// const elemento = document.querySelector("body");
// const elementoNaoExiste = document.querySelector("h1");

// console.log("Elemento existe?: " + Boolean(elemento));
// console.log("Elemento existe?: " + Boolean(elementoNaoExiste));

// document.querySelector(".resultado").addEventListener("change", verificarValor);

// document.querySelector("button").addEventListener("click", somarValor);

document.querySelector("button").addEventListener("click", somarValor);

function somarValor() {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = Number(resultado.innerHTML) + 1;
}

// if (document.querySelector("button") total >= 0 && total < 10) {
//   console.log(somarValor());
// }

// if (document.querySelector("button")) {
//   console.log("Existe");
//   const resultado = document.querySelector(".resultado");

//   function somarValor() {
//     if (resultado >= 0 && resultado < 10) {
//       const soma = resultado + 1;
//       document.querySelector(".resultado").innerText = soma;

//       console.log(soma);
//     } else {
//       console.log("Fora do range");
//     }
//   }
// } else {
//   console.log("Não existe");
// }
