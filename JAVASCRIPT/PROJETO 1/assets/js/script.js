console.log("Conexão ok");

const html = document.querySelector("html");

// const animais = html.querySelector(".grid-section" + ".faq");
// console.log(animais);

// const animais = document.getElementById("animais");

// if (animais) {
//   console.log("Ok");
// }
// const gridSection = document.getElementsByClassName("grid-section");

// EXERCICIOS
// Retorne no console todas as imagens do site

console.log(html.querySelectorAll("img"));
console.log("");
console.log(html.getElementsByTagName("img"));

// Retorne no console apenas as imagens que começaram com a palavra imagem

console.log(html.querySelectorAll("[src*='imagem']"));

// Selecione todos os links internos (onde o href começa com #)
console.log(html.querySelectorAll("[href*='#']"));

// Selecione o primeiro h2 dentro de .animais-descricao
console.log(html.querySelector(".animais-descricao h2"));

// Selecione o último p do site
console.log(html.querySelector(".copy p"));
