console.log("Conexão ok!");

const html = document.querySelector("html");
// console.log(html);

const animais = document.getElementById("animais");
// console.log(animais);

const animaisQuery = document.querySelector("#animais");
// console.log(animaisQuery.innerText);

const animaisGet = document.getElementById("animais");
// console.log(animaisGet.innerText);

const animaisDescricaoH2 = html.querySelectorAll(".animais-descricao h2");
// console.log(animaisDescricaoH2[0].innerHTML);

const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection);

const gridFaq = html.querySelector(".grid-section" + ".faq");

const imgs = document.querySelectorAll("img");

const linksMenu = html.querySelectorAll(".menu a");
// console.log(linksMenu);

const linkExterno = html.querySelector("a[href*='https://www.origamid.com/']");

const paragrafos = html.querySelectorAll("p");

const paragrafosFooter = html.querySelectorAll(".copy p");
// // console.log(paragrafosFooter);

const titulos = Array.from(html.getElementsByClassName("titulo"));

// if (animais) {
//   console.log("Ok");
// }

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

// console.log(paragrafos[paragrafos.length - 1].innerText);
// console.log(paragrafos[--paragrafos.length].innerHTML);

// paragrafosFooter.forEach((item) => {
//   //   item.classList.add("ativado");
//   //   console.log(item);
//   if (item.classList.toggle("ativado")) {
//     item.innerHTML = "Novo paragrafo";
//   }
//   console.log(item);
// });

// titulos.forEach((item) => {
//   console.log(item.innerHTML);
// });

// Mostre no console cada parágrado do site
// console.log(paragrafos);

// paragrafos.forEach((item) => {
//   console.log(item);
// });

// // Mostre o texto dos parágrafos no console

// paragrafos.forEach((item) => {
//   console.log(item.innerText);
// });

// // Como corrigir os erros abaixo:

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// Adicione a classe 'ativo' a todos os elementos 'a' do menu

// linksMenu.forEach((item) => {
//   item.classList.add("ativo");
// });

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

linksMenu.forEach((item) => {
  if (linksMenu[0] === item) {
  } else {
    item.classList.remove("ativo");
  }
});
// console.log(linksMenu);
/*
//////////////////////
//A melhor opção de solução é a de cima, pois evita que o loop tenha que retirar todas as classes e depois adicionar manualmente na sequência

linksMenu.forEach((item) => {
  item.classList.remove("ativo");
});

linksMenu[0].classList.add("ativo");
//////////////////////
*/

// Verifique se as imagens possuem o atributo alt

// imgs.forEach((item) => {
//   if (item.hasAttribute("alt")) {
//     console.log(item);
//   } else {
//     console.log(item);
//   }
// });

// Modifique o href do link externo no menu

console.log(linkExterno);

linkExterno.setAttribute("href", "https://www.origamid.com/teste");
console.log(linkExterno);

// console.log(html.querySelectorAll("[href*='#']"));
