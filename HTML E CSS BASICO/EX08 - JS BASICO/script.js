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

const ativar = document.querySelector(".ativar");

// console.log(ativar);

function ativarAoClick() {
  console.log("clicou em ", ativar);
}

ativar.addEventListener("click", ativarAoClick);

console.log(ativar);
