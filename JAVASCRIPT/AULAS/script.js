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

let nome = "111.1111.1111.11.";

nome = nome.replace(".", "");

console.log(nome);
