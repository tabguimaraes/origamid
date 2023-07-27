// console.log("Conexão ok!");

// const html = document.querySelector("html");
// // console.log(html);

// const itensBody = html.querySelector("body");
// // console.log(itensBody);

// const animais = document.getElementById("animais");
// // console.log(animais);

// const animaisQuery = document.querySelector("#animais");
// // console.log(animaisQuery.innerText);

// const animaisDescricaoH2 = html.querySelectorAll(".animais-descricao h2");
// // console.log(animaisDescricaoH2[0].innerHTML);

// const copyFooter = html.querySelector(".copy");

// const faq = html.querySelector(".faq");

// const gridSection = document.getElementsByClassName("grid-section");
// // console.log(gridSection);

// const gridFaq = html.querySelector(".grid-section" + ".faq");

// const imgs = document.querySelectorAll("img");

// const menu = html.querySelector(".menu");
// // console.log(menu);

// const linksMenu = html.querySelectorAll(".menu a");
// // console.log(linksMenu);

// const linkExterno = html.querySelector("a[href*='https://www.origamid.com/']");

// const linkInterno = html.querySelectorAll("a[href^='#'");

// const paragrafos = html.querySelectorAll("p");

// const paragrafosFooter = html.querySelectorAll(".copy p");
// // // console.log(paragrafosFooter);

// const titulos = Array.from(html.getElementsByClassName("titulo"));

// const texto = html.querySelectorAll(".estilo");
// console.log(texto);

// if (animais) {
//   console.log("Ok");
// }

// function verificarValor(valor) {.
// //   return console.log(!!valor);
// // }

// // verificarValor("");

// // function terceiraIdade(idade) {
// //   if (typeof idade !== "number") {
// //     return "Informe a sua idade!";
// //   } else if (idade >= 60) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log(terceiraIdade(20));

// // Crie uma função para verificar se um valor é Truthy

// function isTruthy(valor) {
//   return console.log(!!valor);
// }
// isTruthy(" ");

// // Crie uma função matemática que retorne o perímetro de um quadrado
// // lembrando: perímetro é a soma dos quatro lados do quadrado

// function perimetro(lado) {
//   return lado * 4;
// }
// console.log(perimetro(10));

// // Crie uma função que retorne o seu nome completo
// // ela deve possuir os parâmetros: nome e sobrenome

// function nomeCompleto(nome, sobreNome) {
//   return console.log(nome + " " + sobreNome);
// }

// nomeCompleto("Tiago", "Guimarães");

// // Crie uma função que verifica se um número é par

// function isEven(valor) {
//   if (valor % 2 === 0) {
//     return console.log("É par");
//   } else {
//     return console.log("É impar");
//   }
// }

// isEven(321456782);

// // Crie uma função que retorne o tipo de
// // dado do argumento passado nela (typeof)

// function retornaTipo(dado) {
//   return console.log(typeof dado);
// }

// retornaTipo(5);

// // addEventListener é uma função nativa do JavaScript
// // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// // utilize essa função para mostrar no console o seu nome completo
// // quando o evento 'click' ocorrer.

// // addEventListener("click", function () {
// //   console.log("Clicado");
// // });

// // Corrija o erro abaixo
// var totalPaises = 193;
// function precisoVisitar(paisesVisitados) {
//   return console.log(
//     `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
//   );
// }
// function jaVisitei(paisesVisitados) {
//   return console.log(
//     `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
//   );
// }
// precisoVisitar(20);
// jaVisitei(20);

// var quadrado = {
//   lados: 5,
//   area () {
//     return this.lados ** 2;
//   },
//   perimetro (lado) {
//     return this.lados * lado;
//   },
// };

// console.log(quadrado.lados); // 4
// console.log(quadrado.area()); // 25
// console.log(quadrado.perimetro(5)); // 20

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// var dadosPessoais = {
//   nome: "Tiago",
//   sobreNome: "Guimarães",
//   idade: 41,
//   genero: "masculino",
//   estadoCivil: "casado",
//   exibirNome() {
//     console.log(`${this.nome} ${this.sobreNome}`);
//   },
// };

// dadosPessoais.exibirNome();

// // Crie um método no objeto anterior, que mostre o seu nome completo

// // Modifique o valor da propriedade preco para 3000
// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: "Audi",
// };

// carro.preco = 3000;

// console.log(carro.preco);

// // Crie um objeto de um cachorro que represente um labrador,
// // preto com 10 anos, que late ao ver um homem

// var cachorro = {
//   raca: "labrador",
//   cor: "preto",
//   idade: 10,
//   latir(pessoa) {
//     if (pessoa === "homem") {
//       console.log("Latiu");
//     } else {
//       console.log("Não latiu");
//     }
//   },
// };

// cachorro.latir();

// const familia = ["Miguel", "Marlene", "Cida", "Tiago"];

// familia.forEach(function (item, index) {
//   console.log(`${index} ${item}`);
// });

// // Crie uma array com os anos que o Brasil ganhou a copa
// // 1959, 1962, 1970, 1994, 2002

// var copas = ["1959", "1962", "1970", "1994", "2002"];

// // Interaja com a array utilizando um loop, para mostrar
// // no console a seguinte mensagem, `O Brasil ganhou a copa de ${ano}`
// copas.forEach(function (ano) {
//   console.log(`O brasil ganhou a copa de ${ano}`);
// });

// // Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância", "Goiaba"];

// for (i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
//   if (frutas[i] === "Pera") {
//     break;
//   }
// }

// // Coloque a última fruta da array acima em uma variável,
// // sem remover a mesma da array.

// var ultimaFruta = frutas[frutas.length - 1];

// console.log(`O array completo é: ${frutas}`);
// console.log(`essa é a última fruta do array: ${ultimaFruta}`);

// var idade = 18;

// idade < 18 ? console.log("Menor de idade") : console.log("maior de idade");

// // idade < 18 ? console.log("menor de 18 anos") : console.log("maior de 18 anos ");

// // var podeEntrar = idade < 18 ? "Menor de 18 anos" : "Maior de 18 anos";
// var podeEntrar = idade < 18 ? "menor de idade" : "maior de idade";

// console.log(podeEntrar);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
// var scroll = 1000;
// scroll += 500;
// console.log(scroll);

// // Atribua true para a variável darCredito,
// // caso o cliente possua carro e casa.
// // E false caso o contrário.
// var possuiCarro = true;
// var possuiCasa = true;
// var darCredito;

// darCredito =
//   possuiCarro && possuiCasa
//     ? "Dar crédito ao cliente"
//     : "Negar crédito ao cliente";

// darCredito = possuiCarro && possuiCasa;

// console.log(darCredito);

// function somarDois(x) {
//   const somar = 2;
//   return console.log(x + somar);
// }
// function dividirDois(x) {
//   const dividir = 2;
//   return console.log(x / dividir);
// }
// somarDois(4);
// dividirDois(6);

// const teste = document.querySelector("h1");

// console.log(teste);

// teste.addEventListener("click", function () {
//   console.log("clicou");
// });

// Retorne o url da página atual utilizando o objeto window

// const pagina = window;
// console.log(pagina);
// console.log("");
// const url = location.href;
// console.log(url);
// console.log("");

// // Seleciona o primeiro elemento da página que
// // possua a classe ativo

// const ativo = document.querySelector(".ativo");
// console.log(ativo);
// console.log("");

// // Retorne a linguagem do navegador

// console.log(navigator.language);
// console.log("");

// // Retorne a largura da janela

// console.log(pagina.innerWidth);
// console.log(screen.width);
// console.log(screen.availWidth);

// function areaQuadrado(lado) {
//   console.log(lado * lado);
// }

// areaQuadrado(8);

// let areaRetangulo = (a, b) => a * b;

// console.log(areaRetangulo(4, 5));

// function calculoIMC(peso, altura) {
//   let imc = peso / (altura * altura);
//   return imc.toFixed();
// }

// console.log(calculoIMC(80, 1.8));

// function verificarIdade(entrada) {
//   if (typeof entrada !== "number") {
//     console.log("Preencha um número");
//   } else {
//     function terceiraIdade(entrada) {
//       if (entrada === 42) {
//         return console.log(
//           "A resposta para o sentido da Vida, do Universo e tudo mais é....42"
//         );
//       } else {
//         if (entrada >= 60) {
//           return console.log("Terceira idade");
//         } else {
//           return console.log("Ainda não é terceira idade");
//         }
//       }
//     }
//     terceiraIdade(entrada);
//   }
// }

// verificarIdade(42);

// function faltaVisitar(paisesVisitados) {
//   let totalPaises = 193;
//   return console.log(`Falta visitar ${totalPaises - paisesVisitados} países`);
// }

// faltaVisitar(1);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// const cadastro = {
//   nome: "Tiago",
//   sobreNome: "Guimarães",
//   idade: 42,
// };

// Crie um método no objeto anterior, que mostre o seu nome completo
// cadastro.mostrarNome = function mostrarNome() {
//   return `${this.nome} ${this.sobreNome}`;
// };

// console.log(cadastro.mostrarNome());

// Modifique o valor da propriedade preco para 3000
// var carro = {
//   preco: 1000,
//   portas: 4,
//   marca: "Audi",
// };

// carro.preco = 3000;

// console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

// let cachorro = {
//   cor: "pReto".toLowerCase(),
//   idade: 10,
//   latir(pessoa) {
//     if (pessoa.toString().toLowerCase() === "homem") {
//       //Com o return + console.log(`Viu um ${pessoa} e latiu`), sempre retorna Undefined
//       return `Viu um ${pessoa.toLowerCase()} e latiu`; // toLowerCase para normalizar a saída, independente se a entrada foi em maiuscula, minuscula, etc
//     } else {
//       return "Não latiu";
//     }
//   },
//   peso: 20,
//   raca: "labrador",
// };

// console.log(cachorro.latir("hOmEm"));

// console.log(cachorro.cor);

// let testeString = "Teste de String EmbaraLhada".toLowerCase();

// console.log(testeString);

// let nome = "111.1111.1111.11.";

// nome = nome.replace(".", "");

// console.log(nome);

// const faltaVisitar = (paisesVisitados) => {
//   let totalPaises = 193;
//   return `Falta visitar ${totalPaises - paisesVisitados}países`;
// };

// console.log(faltaVisitar(110));

// var videoGames = ["Switch", "PS4", "XBox", "3DS"];
// for (var i = 0; i < videoGames.length; i++) {
//   if (videoGames[i] === "XBox") {
//     console.log(videoGames[i]);
//     break;
//   }
// }

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// let anosCampeao = ["1959", "1962", "1970", "1994", "2002"];

// // Interaja com a array utilizando um loop, para mostrar
// // no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// anosCampeao.forEach((ano) => {
//   return console.log(`O brasil ganhou a copa de ${ano}`);
// });

// // Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

// for (i = 0; i < frutas.length; i++) {
//   if (frutas[i] === "Pera") {
//     console.log(frutas[i]);
//     break;
//   }
// }

// // Coloque a última fruta da array acima em uma variável,
// // sem remover a mesma da array.

// let ultimaFruta = frutas[frutas.length - 1];

// console.log(ultimaFruta);

// var x = 5;
// var y = 10;
// x += y; // x = x + y (15)
// x -= y; // x = x - y (-5)
// x *= y; // x = x * y (50)
// x /= y; // x = x / y (0.5)
// x %= y; // x = x % y (0)
// x **= y; // x = x ** y (9765625)

// console.log((x += y));
// console.log((x -= y));
// console.log((x *= y));
// console.log((x /= y));
// console.log((x %= y));
// console.log((x **= y));

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
// var scroll = 1000;

// scroll += 500;

// console.log(scroll);

// // Atribua true para a variável darCredito,
// // caso o cliente possua carro e casa.
// // E false caso o contrário.
// var possuiCarro = false;
// var possuiCasa = true;
// var darCredito = possuiCasa && possuiCarro ? "Tem crédito" : "Não tem crédito";

// console.log(darCredito);

// const dois = 2;
// function somarDois(x) {
//   return console.log(x + dois);
// }

// somarDois(4);

// function dividirDois(x) {
//   return console.log(x / dois);
// }
// dividirDois(6);

// var numero = 50;

// for (let numero = 1; numero <= 10; numero++) {
//   console.log(numero);
// }

// const total = 10 * numero;
// console.log(total);

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

// Aula 0401 Constructor Function 1

// function Carro(marca, modelo, preco, ano) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.preco = preco;
//   this.ano = ano;
// }

// const honda = new Carro("Honda", "Civic", 20e3, 1998);

// console.log(honda);

// honda.modelo = "City";
// console.log(honda);

//Exercícios Aula 0401 Constructor Function 1

// Transforme o objeto abaixo em uma Constructor Function

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = () => {
//     return `${this.nome} andou`;
//   };
// }

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

// const joao = new Pessoa("João", 20);
// const maria = new Pessoa("Maria", 25);
// const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

// function Dom(elements, insertClass) {
//   this.element = document.querySelectorAll(elements);
//   this.addClass = () => {
//     this.element.forEach((itens) => {
//       itens.classList.add(insertClass);
//     });
//   };
//   this.removeClass = () => {
//     this.element.forEach((itens) => {
//       itens.classList.remove(insertClass);
//     });
//   };
// }

// const listaLi = new Dom("li", "ativo");

// console.log(listaLi.removeClass());

// function Carro(marca, precoInicial, taxa) {
//   this.preco = function precoFinal() {
//     return console.log(precoInicial * taxa);
//   };
//   this.taxa = taxa;
//   this.marca = marca;

//   // console.log(precoFinal);
// }

// function Carro(marca, precoInicial) {
//   this.taxa = 1.2;
//   this.precoFinal = precoInicial * this.taxa;
//   this.marca = marca;
//   this.preco = precoInicial;
//   // console.log(precoFinal);
// }

// const mazda = new Carro("mazda", 5000);
// console.log(mazda.marca, mazda.preco);

// const honda = new Carro("honda", 10000, 1.2);
// console.log(honda.marca, honda.precoFinal);

// mazda.taxa = 1.5;
// mazda.preco = console.log(mazda);
// console.log(mazda.marca, mazda.precoFinal);

// function novoObjeto(precoInicial, taxa) {
//   this.preco = precoInicial;
//   this.taxaVariavel = taxa;
//   const precoFinal = this.preco * this.taxaVariavel;
//   return console.log(precoFinal);
// }

// const teste = new novoObjeto();
// console.log(teste);

// teste.preco = 1000;
// console.log(teste);

// teste.taxaVariavel = 1.2;
// console.log(teste);

// const novoTeste = new novoObjeto(2000, 1.5);
// console.log(novoTeste);

// Aula 0402 Prototype

// function Prototipo(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }
// console.log(Prototipo);

// Prototipo.prototype.andar = function () {
//   return this.nome + " andou";
// };

// const joao = new Prototipo("João", 25);
// // console.log(Prototipo.prototype);
// console.log(joao.andar());

// Exercícios Aula 0402 Prototype

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

// function Pessoas(nomeAtribuido, sobreNomeAtribuido, idadeAtribuido) {
//   this.nome = nomeAtribuido;
//   this.sobreNome = sobreNomeAtribuido;
//   this.idade = idadeAtribuido;
// }

// Pessoas.prototype.nomeCompleto = function () {
//   return `${this.nome} ${this.sobreNome}`;
// };

// const cliente = new Pessoas("Tiago", "Guimarães", 42);
// console.log(Pessoas.prototype);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
// const li = document.querySelector("li");

// li;
// li.click;
// li.innerText;
// li.value;
// li.hidden;
// li.offsetLeft;
// li.click();

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

// Exercícios Aula 0404 String

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

// const transacoes = [
//   {
//     descricao: "Taxa do Pão",
//     valor: "R$ 39",
//   },
//   {
//     descricao: "Taxa do Mercado",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 99",
//   },
//   {
//     descricao: "Taxa do Banco",
//     valor: "R$ 129",
//   },
//   {
//     descricao: "Recebimento de Cliente",
//     valor: "R$ 49",
//   },
// ];

// let = valorTaxa = 0;
// let valorRecebimento = 0;

// transacoes.forEach((item) => {
//   if (item.descricao.toLowerCase().includes("taxa")) {
//     valorTaxa += +item.valor.replace("R$ ", "");
//   } else {
//     valorRecebimento += +item.valor.replace("R$ ", "");
//   }
// });
// console.log(valorTaxa);
// console.log(valorRecebimento);

// // Retorne uma array com a lista abaixo
// const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
// let transporteArray = transportes.split(";");
// console.log(transporteArray);

// // Substitua todos os span's por a's
// const html = `<ul>
//                 <li><span>Sobre</span></li>
//                 <li><span>Produtos</span></li>
//                 <li><span>Contato</span></li>
//               </ul>`;

// let htmlModificado = html.replaceAll("span", "a");
// console.log(htmlModificado);

// // Retorne o último caracter da frase
// const frase = "Melhor do ano!";
// console.log(frase[frase.length - 1]);

// // Retorne o total de taxas
// const transacoes2 = ["Taxa do Banco", "   TAXA DO PÃO", "  taxa do mercado", "depósito Bancário", "TARIFA especial"];

// let recorrencias = 0;
// transacoes2.forEach((item) => {
//   if (item.toLowerCase().trim().includes("taxa")) {
//     recorrencias++;
//   }
// });
// console.log(`Existem ${recorrencias} entradas com o nome 'taxa' na lista`);

//Aula 0405 Number e Math 1

//Metodo .toString). 10 ou em branco= Padrão Decimal; Base 2 = Binário; Base 16 = Hexadecimal; Base 32 = duotrigesimal (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V). Obs: Bom método para criar códigos internos de cadastrado de clientes, por exemplo
// const numeroBinario = (255).toString(2);

// console.log(numeroBinario);

//Exercícios Aula 0405 Number e Math 1

// Retorne um número aleatório
// entre 1050 e 2000

// console.log((Math.random() * (1055 - 1050) + 1050).toFixed());

// // Retorne o maior número da lista abaixo
// let numeros = "4, 5, 20, 8, 9";
// // let listaNumeros = [];
// // numeros.split(", ").forEach((item) => {
// //   listaNumeros.push(+item);
// // });
// // console.log(`O maior número da lista é ${Math.max(...listaNumeros)}`);
// console.log(`O maior número da lista é ${Math.max(...numeros.split(", "))}`);

// // Crie uma função para limpar os preços
// // e retornar os números com centavos arredondados
// // depois retorne a soma total
// const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

// //Primeira versão de resolução dlo exercicio

// // function somarPrecos() {
// //   let soma = 0;
// //   listaPrecos.forEach((item) => {
// //     let ajusteNumero = +item.toLowerCase().replace("r$", "").replace(",", ".").trim();
// //     soma += +ajusteNumero.toFixed(2);
// //   });
// //   console.log(soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
// // }

// // somarPrecos();

// let soma = 0;

// function ajustarPreco(preco) {
//   precoAjustado = +preco.toLowerCase().replace("r$", "").replace(",", ".").trim();
//   return precoAjustado;
// }

// listaPrecos.forEach((preco) => {
//   soma += ajustarPreco(preco);
// });

// console.log(soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));

// Exercícios Aula 0406 Array

// Remova o primeiro valor de comidas e coloque em uma variável
// const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// const primeiroValor = comidas.shift();
// console.log(primeiroValor);

// // Remova o último valor de comidas e coloque em uma variável
// const ultimoValor = comidas.pop();
// console.log(ultimoValor);

// // Adicione 'Arroz' ao final da array
// comidas.push("Arroz");
// console.log(comidas);

// // Adicione 'Peixe' e 'Batata' ao início da array
// comidas.unshift("Peixe", "Batata");
// console.log(comidas);

// const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// // Arrume os estudantes em ordem alfabética
// estudantes.sort();
// console.log(estudantes);

// // Inverta a ordem dos estudantes
// estudantes.reverse();
// console.log(estudantes);

// // Verifique se Joana faz parte dos estudantes
// if (estudantes.includes("Joana")) console.log("Joana está na lista");

// // Verifique se Juliana faz parte dos estudantes
// if (estudantes.includes("Juliana")) {
// } else {
//   console.log("Não há Juliana na lista");
// }

// let html = `<section>
//               <div>Sobre</div>
//               <div>Produtos</div>
//               <div>Contato</div>
//             </section>`;
// // Substitua section por ul e div com li,
// // utilizando split e join
// let novoHtml = html.split("section").join("ul").split("div").join("li");
// console.log(novoHtml);

// const carros = ["Ford", "Fiat", "VW", "Honda"];
// // Remova o último carro, mas antes de remover
// // salve a array original em outra variável

// let cloneCarros = carros.slice();

// console.log(carros);
// carros.pop();
// console.log(cloneCarros);
// console.log(carros);
