console.log("Conexão ok!");

const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const html = document.querySelector("html");
// console.log(html);

const animaisDescricao = html.querySelectorAll(".animais-descricao h2");
console.log(animaisDescricao[0].innerHTML);

// // const animais = html.querySelector(".grid-section" + ".faq");
// const animaisQuery = document.querySelector("#animais");
// console.log(animaisQuery.innerText);

// const animaisGet = document.getElementById("animais");
// console.log(animaisGet.innerText);

// if (animais) {
//   console.log("Ok");
// }
// const gridSection = document.getElementsByClassName("grid-section");

// EXERCICIOS
// Retorne no console todas as imagens do site

// console.log(html.querySelectorAll("img"));
// console.log("");
// console.log(html.getElementsByTagName("img"));

// // Retorne no console apenas as imagens que começaram com a palavra imagem

// console.log(html.querySelectorAll("[src*='imagem']"));

// // Selecione todos os links internos (onde o href começa com #)
// console.log(html.querySelectorAll("[href*='#']"));

// // Selecione o primeiro h2 dentro de .animais-descricao
// console.log(html.querySelector(".animais-descricao h2"));

// // Selecione o último p do site
// console.log(html.querySelectorAll(".copy p").innerHTML); //Não extrai o texto / valor de 'p'
// console.log(html.querySelector(".copy p").innerHTML);

const paragrafos = html.querySelectorAll("p");
// console.log(paragrafos[paragrafos.length - 1].innerText);
// console.log(paragrafos[--paragrafos.length].innerHTML);

// const footer = html.querySelectorAll(".copy p");
// // console.log(footer);

// footer.forEach((item) => {
//   //   item.classList.add("ativado");
//   //   console.log(item);
//   if (item.classList.toggle("ativado")) {
//     item.innerHTML = "Novo paragrafo";
//   }
//   console.log(item);
// });

// const titulos = Array.from(html.getElementsByClassName("titulo"));

// titulos.forEach((item) => {
//   console.log(item.innerHTML);
// });

// Mostre no console cada parágrado do site
// console.log(paragrafos);

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console

paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
