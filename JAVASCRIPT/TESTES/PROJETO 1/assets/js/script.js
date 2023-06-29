console.log("Conexão ok!");

const html = document.querySelector("html");
// console.log(html);

const itensBody = html.querySelector("body");
// console.log(itensBody);

const animais = document.getElementById("animais");
// console.log(animais);

const animaisQuery = document.querySelector("#animais");
// console.log(animaisQuery.innerText);

const animaisDescricaoH2 = html.querySelectorAll(".animais-descricao h2");
// console.log(animaisDescricaoH2[0].innerHTML);

const copyFooter = html.querySelector(".copy");

const faq = html.querySelector(".faq");

const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection);

const gridFaq = html.querySelector(".grid-section" + ".faq");

const imgs = document.querySelectorAll("img");

const menu = html.querySelector(".menu");
// console.log(menu);

const linksMenu = html.querySelectorAll(".menu a");
// console.log(linksMenu);

const linkExterno = html.querySelector("a[href*='https://www.origamid.com/']");

const linkInterno = html.querySelectorAll("a[href^='#'");

const paragrafos = html.querySelectorAll("p");

const paragrafosFooter = html.querySelectorAll(".copy p");
// // console.log(paragrafosFooter);

const titulos = Array.from(html.getElementsByClassName("titulo"));

const texto = html.querySelectorAll(".estilo");
// console.log(texto);

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

// linksMenu.forEach((item) => {
//   if (linksMenu[0] === item) {
//   } else {
//     item.classList.remove("ativo");
//   }
// });
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
//     item.setAttribute("alt", "raposa");
//     console.log(item);
//   } else {
//     console.log(item);
//   }
// });

// Modifique o href do link externo no menu

// console.log(linkExterno);

// linkExterno.setAttribute("href", "https://www.origamid.com/teste");
// console.log(linkExterno);

// console.log(html.querySelectorAll("[href*='#']"));

// Verifique a distância da primeira imagem
// em relação ao topo da página

// const primeiraImg = html.querySelector("img").offsetTop;
// console.log(primeiraImg);

// Retorne a soma da largura de todas as imagens

// let larguraImg = 0;

// function somarLargura() {
//   imgs.forEach((item) => {
//     larguraImg += item.offsetWidth;
//   });
//   console.log(larguraImg);
// }
// window.onload = () => {
//   somarLargura();
// };

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// console.log(linksMenu);

// linksMenu.forEach((item) => {
//   //   let eixoX = (item.getBoundingClientRect().x * 0.1).toFixed(0);
//   //   let eixoY = (item.getBoundingClientRect().y * 0.1).toFixed(0);
//   let eixoX = item.offsetWidth;
//   let eixoY = item.offsetHeight;

//   if (eixoX >= 48 && eixoY >= 48) {
//     console.log(`O link ${[item.innerHTML]} possui acessibilidade`);
//   } else {
//     console.log(`O link ${[item.innerHTML]} não possui acessibilidade`);
//   }
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const widthBrowser = window.matchMedia("(max-width: 720px)").matches;
// if (widthBrowser) {
//   menu.classList.add("menu-mobile");
// }

// Exercicios Eventos

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

//Função principal (prevenir o redirecionamento ao clicar no link e chamar demais funções de verificação)
// function funcaoPrincipal(event) {
//   event.preventDefault();
//   linkClicado(event.target.innerHTML);
//   classeAtivo(event.target);
// }

//Função para mostrar no console em qual link o usuário clicou
// function linkClicado(event) {
//   console.log(`clicou em ${event}`);
// }

//Função para adicionar classe 'ativo' ao event.target e retirar a classe dos demais
// function classeAtivo(event) {
//   event.classList.add("ativo");

//   linkInterno.forEach((item) => {
//     if (event != item) {
//       item.classList.remove("ativo");
//     }
//   });
// }

// linkInterno.forEach((item) => {
//   item.addEventListener("click", funcaoPrincipal);
// });

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// itensBody.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// itensBody.addEventListener("click", (event) => {
//   event.target.remove();
// });

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

// html.addEventListener("keypress", (event) => {
//   console.log(event.key);
//   if (event.key === "t") {
//     html.classList.add("estilo");
//   }
//   if (event.key === "q") {
//     html.classList.remove("estilo");
//   }
// });

//Exercícios Manipulação de elementos

// Duplique o menu e adicione ele em copy

// const cloneMenu = menu.cloneNode(true);

// copyFooter.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

// const faqListaDt = faq.querySelector("dt");

// Selecione o DD referente ao primeiro DT
// const faqListaDd = faqListaDt.nextElementSibling;

// faqListaDd.innerText = "21 anos";
// console.log(faqListaDd.innerHTML);

// Substitua o conteúdo html de .faq pelo de .animais

// faq.innerHTML = animais.innerHTML;
