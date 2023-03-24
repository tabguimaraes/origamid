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


